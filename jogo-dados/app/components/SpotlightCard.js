import { useRef } from "react";

export default function SpotlightCard({ children, glowColor = "#7c3aed", style, className }) {
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    overlayRef.current.style.background =
      `radial-gradient(200px circle at ${x}px ${y}px, ${glowColor}55, transparent 70%)`;
  };

  const handleMouseLeave = () => {
    overlayRef.current.style.background = "";
  };

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}