// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { Hammer, Sofa, Wrench, PaintRoller, Truck, Clock, Shield, Star } from 'lucide-react';
import './Services.css'; // <-- Add this import

const Services = () => {
  const services = [
    { icon: <Sofa size={48} />, title: 'Custom Furniture', desc: 'Bespoke furniture designed to your exact specifications. Choose from premium woods and finishes.', features: ['Custom sizes', 'Premium materials', 'Design consultation'] },
    { icon: <Hammer size={48} />, title: 'Carpenter Work', desc: 'Professional carpentry services for home renovations, installations, and custom builds.', features: ['Door & window fitting', 'Modular kitchen', 'Wood paneling'] },
    { icon: <Wrench size={48} />, title: 'Furniture Repair', desc: 'Expert repair for damaged furniture. Restore strength and beauty to your pieces.', features: ['Structural repair', 'Joint fixing', 'Hardware replacement'] },
    { icon: <PaintRoller size={48} />, title: 'Polish & Renovation', desc: 'Give old furniture a new life with professional polishing and renovation services.', features: ['Wood polishing', 'Color restoration', 'Scratch removal'] }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            We offer comprehensive furniture and carpentry solutions for homes and businesses in Sahjanwa, Gorakhpur.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="features-highlight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Truck size={32} /></div>
              <p>Free Estimate</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Clock size={32} /></div>
              <p>On-Time Delivery</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Shield size={32} /></div>
              <p>1 Year Warranty</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Star size={32} /></div>
              <p>Premium Quality</p>
            </div>
          </div>
        </motion.div>

        {/* Optional CTA Section */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Space?</h2>
          <p>Contact us today for a free consultation and estimate</p>
          <button className="cta-button">Get a Free Quote</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;