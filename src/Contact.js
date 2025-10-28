import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission (e.g., send to API)
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-main">
          <h2 className="contact-heading">Contact Us</h2>
          {submitted ? (
            <div className="contact-confirmation">Thank you for reaching out! We'll get back to you soon.</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
              </label>
              <label>
                Phone (optional)
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
              </label>
              <label>
                Comment/Inquiry
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Type your message here..." required />
              </label>
              <button type="submit" className="contact-submit">Submit</button>
            </form>
          )}
        </div>
        <aside className="contact-sidebar">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-info-item"><span className="icon-phone" /> <a href="tel:+2348012345678">+234 801 234 5678</a></div>
            <div className="contact-info-item"><span className="icon-phone" /> <a href="tel:+2348098765432">+234 809 876 5432</a></div>
            <div className="contact-info-item"><span className="icon-email" /> <a href="mailto:info@lifemedical.com">info@lifemedical.com</a></div>
          </div>
          <div className="contact-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{color: '#1877f3'}}><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 48 48" style={{color: '#000'}}><path d="M41.5 15.5c-3.6 0-6.5-2.9-6.5-6.5h-5.5v24.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.5 0 1 .1 1.5.3v-5.2c-.5-.1-1-.1-1.5-.1-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5V21.2c1.8 1.1 3.9 1.8 6.1 1.8v-5.5z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 1200 1227" style={{color: '#1a1a1a'}}><path d="M1199.61 0H944.13L599.8 462.7 255.87 0H.39l438.6 602.09L0 1227h255.87l343.93-462.7L944.13 1227h255.48L816.39 624.91 1199.61 0zm-326.7 1107.13l-273.11-367.5-273.11 367.5H109.2l343.93-462.7L109.2 119.87h217.49l273.11 367.5 273.11-367.5h217.09l-343.93 462.7 343.93 462.7h-217.09z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{color: '#e1306c'}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.45.425 20.277.131 19 .072 17.72.013 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
          <div className="contact-directions">
            <h4>How to Find Us</h4>
            <ol>
              <li>From any part of Lagos, board a bus going to Ikorodu Garage (Roundabout).</li>
              <li>From Ikorodu Garage, take a vehicle heading towards Itamaga Junction.</li>
              <li>At Itamaga, stay on the same road and continue straight.</li>
              <li>Keep moving until you reach Ginti Bus Stop.</li>
              <li>A little after Ginti Bus Stop, you will see Kingsfield College clearly by the roadside.</li>
              <li>Cross to the opposite side of the road — the location is directly across from Kingsfield College.</li>
              <li>Ask for No. 2, Ajenipa Street, Ijede Road, Ikorodu, Lagos State.</li>
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
