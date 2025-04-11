import React, { useState } from "react";
import { facebook, instagram, mail_social, call_social } from "../../assets/icons";
import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="contact-us">
      <div className="contact-us__header">
        <h2 className="contact-us__title">Contact Us</h2>
        <p className="contact-us__subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolorum..
        </p>
      </div>

      <div className="contact-us__box">
        <div className="contact-us__info">
          <h2 className="contact-us__info-title">Get in touch</h2>
          <p className="contact-us__info-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod velit adipisci tempore maiores, odit quam..
          </p>

          <div className="contact-us__info-item">
            <img src={mail_social} alt="Email" className="contact-us__icon icon-email" />
            <div>
              <h3 className="contact-us__info-heading">Email Us</h3>
              <p className="contact-us__info-description">support@yourdomain.tld</p>
              <p className="contact-us__info-description">hello@yourdomain.tld</p>
            </div>
          </div>

          <div className="contact-us__info-item">
            <img src={call_social} alt="Phone" className="contact-us__icon icon-phone" />
            <div>
              <h3 className="contact-us__info-heading">Call Us</h3>
              <p className="contact-us__info-description">Phone: +6221.2002.2012</p>
              <p className="contact-us__info-description">Fax: +6221.2002.2013</p>
            </div>
          </div>

          <div className="contact-us__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-us__social-link">
              <img src={facebook} alt="Facebook" className="icon-social-media" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-us__social-link">
              <img src={instagram} alt="Instagram" className="icon-social-media" />
            </a>
          </div>
        </div>

        <div className="contact-us__form">
          <h2 className="contact-us__form-title">Send us a message</h2>
          <form className="contact-us__form-container" onSubmit={handleSubmit}>
            <div className="contact-us__form-group">
              <input type="text" name="name" placeholder="Name" className="contact-us__input" value={formData.name} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" className="contact-us__input" value={formData.phone} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" className="contact-us__input" value={formData.email} onChange={handleChange} required />
            </div>
            <textarea name="message" placeholder="Message" className="contact-us__textarea" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="contact-us__button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
