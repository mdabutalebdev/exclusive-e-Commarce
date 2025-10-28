import React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#DB4444] text-white font-normal text-base px-3 py-2  ${className}`}
    >
      {children}
    </button>
  );
}
