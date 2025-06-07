import React from "react";
import { useNavigate } from "react-router-dom";


const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.85)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const closeButtonStyle = {
  position: "absolute",
  top: 20,
  right: 30,
  fontSize: "2rem",
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
};

export default function AnnouncementModal({ open, onClose, message, imageUrl, ctaText }) {
  if (!open) return null;
  const navigate = useNavigate();
  return (
    <div style={modalStyle}>
      <button style={closeButtonStyle} onClick={onClose} aria-label="Close">
        &times;
      </button>
      <div
        style={{
          background: "#222",
          borderRadius: 16,
          padding: 0,
          minWidth: 320,
          maxWidth: 700,
          width: "90vw",
          maxHeight: "90vh",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: window.innerWidth < 700 ? "column" : "row",
          alignItems: "stretch",
          overflow: "hidden",
        }}
      >
        {/* Left: Image */}
        <div style={{
          flex: 1,
          background: "#181818",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 180,
          minWidth: 180,
          maxHeight: window.innerWidth < 700 ? 180 : "none",
        }}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Course"
              style={{
                width: window.innerWidth < 700 ? "100%" : "100%",
                height: window.innerWidth < 700 ? 180 : "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        {/* Right: Content */}
        <div style={{
          flex: 1.2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: window.innerWidth < 700 ? 16 : 32,
        }}>
          <h1 style={{ marginBottom: 12, fontSize: window.innerWidth < 700 ? "1.2rem" : "1.5rem" }}>Announcement</h1>
          <p style={{ fontSize: window.innerWidth < 700 ? "0.95rem" : "1rem", textAlign: "justify", marginBottom: 24 }}>{message}</p>
          <div style={{ flex: 1 }} />
          {ctaText && (
            <button
              onClick={() => {
                onClose();
                navigate("/contact");
              }}
              style={{
                background: "#4ade80",
                color: "#222",
                border: "none",
                borderRadius: 8,
                padding: window.innerWidth < 700 ? "8px 18px" : "10px 28px",
                fontWeight: 600,
                fontSize: window.innerWidth < 700 ? "0.95rem" : "1rem",
                cursor: "pointer",
                marginTop: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                transition: "background 0.2s",
                alignSelf: "center",
              }}
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
