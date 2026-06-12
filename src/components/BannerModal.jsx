import { useState, useEffect } from "react";
import banner from "../assets/modal.png";
import "./BannerModal.css";

const BannerModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500); // thoda delay se smooth open

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="banner-modal">
        <button className="close-btn" onClick={() => setShow(false)}>
          ✖
        </button>

        <img src={banner} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default BannerModal;