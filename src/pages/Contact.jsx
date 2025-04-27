import React, { useState } from "react";
import "../styles/Contact.css";
import "../styles/App.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You could integrate with emailjs or backend API here
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
          <ul>
            <li><FaPhoneAlt /> +977 9803383479</li>
            <li><FaEnvelope /> Surilpokharel4@gmail.com</li>
            <li><FaMapMarkerAlt /> Saraswotinagar -06, Kathmandu</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-group">
            <div className="floating-label">
              <input type="text" name="first" value={formData.first} onChange={handleChange} required />
              <label>First</label>
            </div>
            <div className="floating-label">
              <input type="text" name="last" value={formData.last} onChange={handleChange} required />
              <label>Last</label>
            </div>
          </div>
          <div className="floating-label">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Email</label>
          </div>
          <div className="floating-label">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            <label>Phone (optional)</label>
          </div>
          <div className="floating-label">
            <textarea name="message" value={formData.message} onChange={handleChange} required />
            <label>Message</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
