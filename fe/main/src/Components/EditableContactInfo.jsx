import React, { useState, useEffect } from "react";
// import './EditableContactInfo.css';

const EditableContactInfo = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });

  useEffect(() => {
    const savedInfo = localStorage.getItem("contactInfo");
    if (savedInfo) {
      setContactInfo(JSON.parse(savedInfo));
      setFormData(JSON.parse(savedInfo));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("contactInfo", JSON.stringify(formData));
    setContactInfo(formData);
    setIsEditing(false);
  };

  if (!contactInfo) {
    return <p>No contact information available.</p>;
  }

  return (
    <div className="editable-contact-info">
      {isEditing ? (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
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
              <option value="Inquiry">Inquiry</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {contactInfo.name}</p>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          <p>Subject: {contactInfo.subject}</p>
          <p>Comment: {contactInfo.comment}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditableContactInfo;
