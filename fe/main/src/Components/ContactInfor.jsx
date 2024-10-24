import React from "react";
import "../Css/ContactInfor.css";
import c7 from "../img/dealer.png";
const ContactInfo = () => {
  return (
    <div className="contact-info">
      <img src={c7} alt="Alfredo Gouse" className="profile-picture" />
      <div className="info">
        <h4>Alfredo Gouse</h4>
        <p>Dealer</p>
      </div>
      <div className="divider"></div> {/* Add divider here */}
      <div className="contact-details">
        <div className="phone">
          <span className="icon">📞</span>
          <span className="detail">240-865-3730</span>
        </div>
        <div className="divider"></div> {/* Add divider here */}
        <div className="email">
          <span className="icon">📧</span>
          <span className="detail">alfred.g@mail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
