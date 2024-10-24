import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage
    localStorage.setItem("contactInfo", JSON.stringify(formData));
    setSubmissionStatus("Your message has been sent successfully!");

    // Optionally clear the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      comment: "",
    });
  };

  return (
    <div className="contact-form">
      <h3>Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(000) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="inquiry">Inquiry</option>
            <option value="test-drive">Test Drive</option>
            <option value="service">Service</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Leave a message here"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button className="button1" type="submit">
            Contact Dealer
          </button>
          <Link to="/yourInfor" className="button3">View Your Info</Link>
        </div>
        {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
