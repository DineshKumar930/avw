// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    workType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.name && formData.phone && formData.message) {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzTNtkX1tEW1J4GtYDd_0e_vyVMCty_1swSJ28snISobe1PrxTAo9yjFN698zNxr99F/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            workType: formData.workType,
            message: formData.message,
          }),
        }
      );

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        workType: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
  }
};

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">Contact Us</h1>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px', color: '#aaa' }}>
          Get in touch for free estimates, consultations, or any questions about our services.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#c49a6c' }}>Get in Touch</h2>
          
          <div className="info-item">
            <MapPin className="info-icon" size={28} style={{ color: '#8B5A2B' }} />
            <div>
              <h4 style={{ marginBottom: '4px' }}>Our Location</h4>
              <p>Main Road, Near Post Office, Sahjanwa, Gorakhpur - 273209</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone className="info-icon" size={28} style={{ color: '#8B5A2B' }} />
            <div>
              <h4 style={{ marginBottom: '4px' }}>Phone Number</h4>
              <p>+91 98765 43210</p>
              <p>+91 87654 32109</p>
            </div>
          </div>
          
          <div className="info-item">
            <Mail className="info-icon" size={28} style={{ color: '#8B5A2B' }} />
            <div>
              <h4 style={{ marginBottom: '4px' }}>Email Address</h4>
              <p>info@woodcraftstudio.com</p>
              <p>support@woodcraftstudio.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <Clock className="info-icon" size={28} style={{ color: '#8B5A2B' }} />
            <div>
              <h4 style={{ marginBottom: '4px' }}>Working Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28777.533264104416!2d83.175326!3d26.767229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448e0c6e5b5b%3A0x7c8a5f3c6a8b2c!2sSahjanwa%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#c49a6c' }}>Send a Message</h2>
          
          {submitted && (
            <div style={{ background: '#2e7d32', padding: '12px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="form-group">
              <label>Work Type</label>
              <select
                value={formData.workType}
                onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
              >
                <option value="">Select service type</option>
                <option value="custom">Custom Furniture</option>
                <option value="carpenter">Carpenter Work</option>
                <option value="repair">Furniture Repair</option>
                <option value="polish">Polish & Renovation</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Describe your requirements..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;