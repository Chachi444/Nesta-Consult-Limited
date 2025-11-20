const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
// Allow configuring allowed client origin in production. If not set, allow all (dev).
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json());

// simple request logger for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`, req.body || "");
  next();
});

// Validate credentials early
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const credentialsPresent = !!(EMAIL_USER && EMAIL_PASS);

if (!credentialsPresent) {
  console.warn("Warning: EMAIL_USER or EMAIL_PASS not set. Email sending will be disabled until these are provided in .env");
}

// create transporter only if credentials are present
let transporter = null;
if (credentialsPresent) {
  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // verify transporter at startup to reveal auth/connection issues early
  transporter.verify((err, success) => {
    if (err) {
      console.error("Nodemailer verify failed:", err && err.message ? err.message : err);
    } else {
      console.log("Nodemailer transporter is ready");
    }
  });
} else {
  // keep server running but do not attempt to send emails
  console.log("Running without email credentials. POST /api/send-email will return a helpful error.");
}

app.post("/api/send-email", async (req, res) => {
  try {
    if (!credentialsPresent) {
      // friendly error for missing configuration
      return res.status(500).json({
        ok: false,
        error: "Email credentials missing. Please set EMAIL_USER and EMAIL_PASS in your .env (do NOT commit).",
      });
    }

    const { type, name, email, phone, message, date, time } = req.body;

    let subject = "Website Message";
    let html = "";
    if (type === "appointment") {
      subject = `Appointment Request from ${name}`;
      html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `;
    } else {
      subject = `Contact Form Message from ${name}`;
      html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    }

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER, // receive on same account; change if needed
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    res.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ ok: false, error: err.message || "Failed to send email" });
  }
});

// Serve React build in production when build is placed at ../build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Email server running on port ${PORT}`));
