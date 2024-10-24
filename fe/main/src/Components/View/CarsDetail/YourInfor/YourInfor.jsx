import React, { useState, useEffect } from "react";
import "./YourInfor.css" ;
import Header from "../../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../../../componentOfThanh/Footer";
const YourInfo = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const savedInfo = localStorage.getItem("contactInfo");
    if (savedInfo) {
      setContactInfo(JSON.parse(savedInfo));
    } else {
      setContactInfo(null); //  giá trị null nếu không có thông tin
    }
  }, []);

  return (
    <div className="your-info">
         <Header />
         <Content title="Tesla Model 3 Standard Range Plus" description="Homepage - User Information" />
      <main className="main-content">
        <div className="info-container">
          {contactInfo ? (
            <div>
              <p><strong>Name:</strong> {contactInfo.name}</p>
              <p><strong>Email:</strong> {contactInfo.email}</p>
              <p><strong>Phone:</strong> {contactInfo.phone}</p>
              <p><strong>Subject:</strong> {contactInfo.subject}</p>
              <p><strong>Comment:</strong> {contactInfo.comment}</p>
            </div>
          ) : (
            <p className="no-info">No contact information available.</p>
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default YourInfo;
