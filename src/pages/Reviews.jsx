// src/pages/Reviews.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Reviews.css'; // <-- Add this import

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Amit Singh', text: 'Best carpenter in Sahjanwa! Made my dream dining table perfectly. Very professional and timely service.', rating: 5, date: '2024-02-15' },
    { id: 2, name: 'Priya Sharma', text: 'Excellent polish work. My old furniture looks brand new! Highly recommend WoodCraft Studio.', rating: 5, date: '2024-02-10' },
    { id: 3, name: 'Rahul Verma', text: 'Professional team, delivered on time. Quality of work is outstanding.', rating: 4, date: '2024-02-05' },
    { id: 4, name: 'Neha Gupta', text: 'Custom furniture exactly as I wanted. Great craftsmanship!', rating: 5, date: '2024-01-28' },
    { id: 5, name: 'Vikash Yadav', text: 'Repaired my old sofa set perfectly. Very reasonable pricing.', rating: 5, date: '2024-01-20' }
  ]);

  const [formData, setFormData] = useState({ name: '', message: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  // Calculate average rating
  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.name && formData.message) {
    try {
  await fetch(
  "https://script.google.com/macros/s/AKfycbxGRX8eEX8dOg5_SQ9uLTU6Kjrjltu_O2VV-4pfS7Kjd7Z79o5L95_w4N6ID5bJiDXw/exec",
  {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      review: formData.message,
      rating: formData.rating,
      date: new Date().toISOString().split("T")[0],
    }),
  }
);

  const newReview = {
    id: reviews.length + 1,
    name: formData.name,
    text: formData.message,
    rating: parseInt(formData.rating),
    date: new Date().toISOString().split("T")[0],
  };

  setReviews([newReview, ...reviews]);
  setFormData({ name: "", message: "", rating: 5 });

  alert("Review Submitted!");
} catch (err) {
  console.error(err);
} 
  }
};

  return (
    <div className="reviews-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Customer Reviews</h1>
          <p className="section-subtitle">
            Real feedback from our valued customers in Sahjanwa, Gorakhpur.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-number">{reviews.length}+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{averageRating}</div>
            <div className="stat-label">Average Rating</div>
            <div className="average-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star" style={{ color: i < Math.round(averageRating) ? '#ffc107' : '#ddd' }}>★</span>
                ))}
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star" style={{ color: i < review.rating ? '#ffc107' : '#e0e0e0' }}>★</span>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">{review.name}</p>
              <div className="review-date">{review.date}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="review-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3>Share Your Experience</h3>
          {submitted && (
            <div className="success-message">
              Thank you for your feedback!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name <span className="required">*</span></label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Rating</label>
              <div className="rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="rating-star-btn"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    style={{ color: star <= formData.rating ? '#ffc107' : '#ddd' }}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Your Message <span className="required">*</span></label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Submit Review</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;