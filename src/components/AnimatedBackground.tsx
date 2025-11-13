import React from "react";

interface AnimatedBackgroundProps {
  variant?: "light" | "dark";
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = "light" }) => {
  const bgClass = variant === "dark" ? "bg-gray-900" : "bg-gray-100";

  return (
    <div className={`fixed inset-0 -z-10 ${bgClass}`}>
      {/* your animation or background content */}
    </div>
  );
};

export default AnimatedBackground;

