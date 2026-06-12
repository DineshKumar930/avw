// src/components/LoadingAnimation.jsx
import './LoadingAnimation.css'; // We'll create this CSS file

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <h1 className="brand-name">AV Wooden Craft</h1>
        <p className="brand-location">सहजनवा, गोरखपुर</p>
        <p className="brand-tagline">लकड़ी की कला में बसा विश्वास, हर घर की खूबसूरती का एहसास</p>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;