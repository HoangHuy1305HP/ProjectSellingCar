import React from "react";
import EditableContactInfo from "../../../EditableContactInfo";
import ContactForm from "../../../ContactForm";
const ContactForm = () => {
  const [showContactForm, setShowContactForm] = useState(true);
  const handleFormSave = () => {
    setShowContactForm(false);
  };
  return (
    <div>
      <div className="contact-form-container">
        {showContactForm ? (
          <ContactForm onSave={handleFormSave} />
        ) : (
          <EditableContactInfo />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
