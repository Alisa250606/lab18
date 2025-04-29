import React from "react";
import "./Footer.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="mailto:kn23-a.daieva@nubip.edu.ua" className="footer-link">
          <FaEnvelope className="icon" /> kn23-a.daieva@nubip.edu.ua
        </a>
        <a
          href="https://github.com/Alisa250606"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="icon" /> GitHub: Alisa250606
        </a>
      </div>
    </footer>
  );
};

export default Footer;
