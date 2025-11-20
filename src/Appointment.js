import React, { useState } from "react";
import "./Appointment.css";
import receptionistBg from "./assets/receptionist.png"; 

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // prefer an env override; defaults to localhost:5000 in dev
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "appointment",
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          time: form.time,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => null);
        throw new Error(errJson?.error || "Network response was not ok");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", date: "", time: "", message: "" });
    } catch (err) {
      console.error("Send appointment failed", err);
      alert(err.message || "Could not book appointment. Please try again later.");
    }
  };

  return (
    <section className="appointment-section" id="appointment" style={{ backgroundImage: `url(${receptionistBg})` }}>
      <h2 className="appointment-heading">Book An Appointment</h2>
      <div className="appointment-form-img-box">
        <div className="appointment-img-wrap">
          <img src={receptionistBg} alt="Receptionist" className="appointment-img" />
        </div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="appointment-confirmation">Thank you for booking! We will contact you to confirm your appointment.</div>
          ) : (
            <>
              <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
              </label>
              <label>
                Date
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
              </label>
              <label>
                Time
                <input type="time" name="time" value={form.time} onChange={handleChange} required />
              </label>
              <label>
                Message (optional)
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any specific request?" />
              </label>
              <button type="submit" className="appointment-submit">Book Appointment</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Appointment;
