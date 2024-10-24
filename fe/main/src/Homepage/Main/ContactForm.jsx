import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleKeyPress = (e) => {
    // Ngăn nhập ký tự không phải số
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra dữ liệu và gửi đi
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("Vui lòng điền tất cả các trường.");
      return;
    }

    // Kiểm tra định dạng số điện thoại
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(formData.phone)) {
      setError(
        "Số điện thoại không hợp lệ. Vui lòng nhập từ 10 đến 15 chữ số."
      );
      return;
    }

    // Thay thế bằng logic gửi email hoặc xử lý dữ liệu
    // Ví dụ: Gửi dữ liệu đến server hoặc dịch vụ gửi email

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setError("");
  };

  return (
    <div>
      {/* {submitted && <p>Cảm ơn bạn đã gửi liên hệ!</p>} */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="form-concactform-thanh" onSubmit={handleSubmit}>
        <div>
          <label style={{ color: "white" }} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
          />
        </div>
        <div>
          <label style={{ color: "white" }} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@mail.com"
          />
        </div>
        <div>
          <label style={{ color: "white" }} htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            pattern="[0-9]{10,15}" // Chỉ cho phép từ 10 đến 15 chữ số
            required
            placeholder="000-000-000"
          />
        </div>
        <div>
          <label style={{ color: "white" }} htmlFor="message">
            Comment
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="9"
            cols="60"
            placeholder="Leave a message here"
            style={{ width: "600px" }}
          />
        </div>
        <button type="submit" className="Send1">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
