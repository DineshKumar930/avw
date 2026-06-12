import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919616945898";
  const message = "Hello! I need furniture services.";
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {showText && (
        <div
          style={{
            background: "white",
            padding: "8px 14px",
            borderRadius: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            fontSize: "14px",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Chat with us
        </div>
      )}

      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "60px",
          height: "60px",
          background: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{
            width: "32px",
            height: "32px",
          }}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;