import React from "react";

const ShoppingBagIcon = ({ size = 40, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="7" width="12" height="14" rx="2" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <line x1="12" y1="7" x2="12" y2="21" />
    </svg>
  );
};

export default ShoppingBagIcon;
