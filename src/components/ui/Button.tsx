// components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "green-glow" | "purple" | "outline" | "white-glow";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean; // thêm prop fullWidth
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "green-glow",
  size = "md",
  onClick,
  className = "",
  fullWidth = false,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variantClasses: Record<string, string> = {
    "green-glow":
      "bg-gradient-to-r from-green-100 to-green-400 text-green-800 font-bold rounded-3xl relative overflow-hidden",
    purple:
      "bg-gradient-to-r from-purple-400 to-blue-900 text-white font-semibold rounded-xl",
    outline:
      "border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all",
    "white-glow":
      "text-white font-bold relative hover:text-white hover:shadow-[0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#fff]",
  };

  return (
    <button
      className={`${sizeClasses[size]} ${
        variantClasses[variant]
      } transition-all duration-300 ${fullWidth ? "w-full" : ""} ${className}`}
      style={{
        boxShadow: variant === "green-glow" ? "0 0 0px transparent" : undefined,
        color: variant === "green-glow" ? "#1e4c1eff" : undefined, // chữ xanh lá đậm
      }}
      onMouseEnter={(e) => {
        if (variant === "green-glow") {
          (e.currentTarget.style as any).boxShadow =
            "0 0 6px #65f97eff, 0 0 6px #c9fecdff, 0 0 6px #ceffc1ff"; // chỉ phát sáng
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "green-glow") {
          (e.currentTarget.style as any).boxShadow = "0 0 6px transparent";
        }
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
