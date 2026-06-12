// src/pages/Gallery.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Gallery.css'; // <-- Add this import

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { before: '/images/wind.png', after: 'images/wind.png', title: 'Window Restoration', desc: 'Complete polish and repair of window' },
    { before: '/images/temp.jpg', after: 'images/temp.jpg', title: 'Custom Temple', desc: 'Built-in temple with premium teak wood' },
    { before: 'images/ddd.png', after: 'images/ddd.png', title: 'Door Restoration', desc: 'Premium Door Makeover' },
    { before: '/images/door2.jpeg', after: '/images/door3.jpeg', title: 'Premium Door', desc: 'Complete Door Makeover' },
    { before: '/images/sss.jpeg', after: '/images/ssss.jpeg', title: 'Door Repair', desc: 'Strengthened joints and new polish' },
    { before: '/images/ch.jpg', after: '/images/ch2.jpg', title: 'Chair Design', desc: 'Modern showcase with glass doors' }
  ];

  return (
    <div className="gallery-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Before & After Gallery</h1>
          <p className="section-subtitle">
            See the transformation of our furniture restoration and custom build projects.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="gallery-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(project)}
            >
              <div className="image-container">
                <div className="image-wrapper">
                  <span className="image-label">BEFORE</span>
                  <img src={project.before} alt="Before" loading="lazy" />
                </div>
                <div className="image-wrapper">
                  <span className="image-label after">AFTER</span>
                  <img src={project.after} alt="After" loading="lazy" />
                </div>
                <div className="vs-divider">VS</div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="badge">
                  <span>✨</span> Before → After
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <button className="close-modal" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage.after} alt="Full view" />
            <p className="modal-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;