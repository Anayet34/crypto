import React from 'react';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import "./contact.css"

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>CONTACT</h2>
      <div >
      <div className="social-media">
  <a href="https://t.me/CEREALGUYCHAT" target="_blank" rel="noopener noreferrer">
    <FaTelegram />
  </a>
        <a href="https://twitter.com/cerealguy_meme?t=wN2QjbO28TPQR0UbKQK0cA&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
         </div>
      </div>
      <p>Copyright 2023 © Cereal Guy</p>
    </div>
  );
};

export default ContactPage;
