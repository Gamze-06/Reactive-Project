import React from "react";
import "./Footer.css";
import logo from "./logo.png";  // Logo dosyasını import et

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Logo" className="footer-logo" />  {/* Import edilen logo kullanılıyor */}
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eos est tempora iste,
            repellendus odit sequi eum expedita quisquam soluta aliquam laudantium dolores amet nemo?
            Hic pariatur maxime eos ipsam.
          </p>
        </div>

        <div className="footer-bottom">
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Helpful Links</h3>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/supports">Supports</a></li>
              <li><a href="/terms">Terms & Condition</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
