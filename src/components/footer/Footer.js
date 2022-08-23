import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Frank Jhonatan Chancafe Miramira</h1>
        <p>Vivo en Lima - Perú</p>
      </div>
      <div className="footer-contact">
        <h3>Contáctame</h3>
        <p>Comunicarse conmigo para cualquier trabajo</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Realizado por Frank Jhonatan Chancafe Miramira</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter linkedin"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
