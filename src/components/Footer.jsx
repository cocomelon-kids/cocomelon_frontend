import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-contact">
        <h3 className="footer-title">Contact Us</h3>
        <p>Cocomelon Preschool and Daycare</p>
        <p>123 ABC Street, Visakhapatnam, Andhra Pradesh 530013</p>
        <p>
          Phone: <a href="tel:+917995198885" className="footer-link">+91 6302134335</a>
        </p>
        <p>
          <a href="tel:+917995198885" className="footer-link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 7995198885</a>
        </p>
        <p>
          Email: <a href="mailto:yandapallisravankumar@gmail.com" className="footer-link">
            yandapallisravankumar@gmail.com
          </a>
        </p>
      </div>

      <div className="footer-section footer-follow">
        <h3 className="footer-title">Follow Us</h3>
        <div className="social-icons">
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link instagram"
          >
            <FaInstagram size={30} />
            <span className="social-text">Instagram</span>
          </a>

          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link youtube"
          >
            <FaYoutube size={30} />
            <span className="social-text">YouTube</span>
          </a>
        </div>
      </div>

      <div className="footer-section footer-location">
        <h3 className="footer-title">Our Location</h3>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3678013160747!2d83.31360527480573!3d17.737546081755837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394365eaa49fdf%3A0xc211e410175c7bc8!2sCocomelon%20Pre%20school%20and%20Day%20care!5e0!3m2!1sen!2sin!4v1697725049642!5m2!1sen!2sin"
          width="300"
          height="200"
          className="footer-map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
