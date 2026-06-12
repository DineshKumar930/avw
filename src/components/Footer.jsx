// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import './Footer.css'; // <-- Add this import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div>
            <h4>AV Wooden Craft</h4>
            <p>Premium furniture & carpenter services in Sahjanwa, Gorakhpur.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Custom Furniture</li>
              <li>Carpenter Work</li>
              <li>Furniture Repair</li>
              <li>Polish & Renovation</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>📍 Sahjanwa, Gorakhpur, UP</li>
              <li>📞 +91 9616945898</li>
              <li>✉️ avwoodencraft@gmail.com</li>
              <li><a
      href="https://facebook.com/your-page"
      target="_blank"
      rel="noopener noreferrer"
    ><FaFacebook /> Facebook</a></li>
              <li>
                <a
      href="https://www.instagram.com/avwoodencraft.official?utm_source=qr&igsh=MXNpbXJ4a3F0aTMwcg=="
      target="_blank"
      rel="noopener noreferrer">
                <FaInstagram /> Instagram </a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            &copy; 2025 AV Wooden Craft. All rights reserved.
          </p>

          <p className="developer-credit">
            Developed & Designed by{" "}
            <a
              href="https://dkwebsoft.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              DK WebSoft
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;