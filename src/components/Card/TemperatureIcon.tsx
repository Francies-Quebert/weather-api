import React from "react";

function TemperatureIcon() {
  return (
    <svg
      width="70px"
      height="70px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C15.0376 22 17.5 19.5376 17.5 16.5C17.5 14.7636 16.6954 13.2152 15.4386 12.2072C15.1749 11.9957 15 11.6857 15 11.3477V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11.3477C9 11.6857 8.82505 11.9957 8.56141 12.2072C7.30465 13.2152 6.5 14.7636 6.5 16.5C6.5 19.5376 8.96243 22 12 22Z"
        
      />
      <path
        d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeOpacity='0.5'
      />
      <path
        d="M12 14V5"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity='0.5'
      />
    </svg>
  );
}

export default TemperatureIcon;