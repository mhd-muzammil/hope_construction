import React from 'react';

const ProjectButton = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center w-[48px] h-[48px] bg-[#F5B400] overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:bg-[#e0a600] ${className}`}
      aria-label="View Project"
    >
      {/* Primary Arrow - Starts centered, moves top-right on hover and disappears outside the container */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="absolute text-[#111] w-5 h-5 transition-transform duration-300 ease-out transform group-hover:translate-x-8 group-hover:-translate-y-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>

      {/* Secondary Arrow - Starts hidden in bottom-left outside the container, moves to center on hover */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="absolute text-[#111] w-5 h-5 transition-transform duration-300 ease-out transform -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </button>
  );
};

export default ProjectButton;
