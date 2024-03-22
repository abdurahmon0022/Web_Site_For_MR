import './Footer.css';


import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        {/* Логотипы/фото соц. сетей */}
        <img src="./slph/facebook.png" alt="Facebook" />
        <img src="./slph/instagram.png" alt="Instagram" />
        <img src="./slph/youtube.png" alt="YouTube" />
      </div>
      <div className="center">
        {/* Текст "Powered by LLC “Afzali sugd” */}
        <p>Powered by LLC “Afzali sugd”</p>
      </div>
      <div className="right">
        {/* Логотипы/фото почты и телефона */}
        <div className="contact-info">
          <div className="email">
            <img src="./slph/email.png" alt="Email" />
            <p>info@afzal.tj</p>
          </div>
          <div className="phone">
            <img src="./slph/phone.png" alt="Phone" />
            <p>+992 92 900 11 99</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
