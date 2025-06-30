import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Revolutionary star */}
      <path
        d="M25 5l4.5 14h14.7l-11.9 8.6 4.5 14L25 33l-11.8 8.6 4.5-14L5.8 19h14.7L25 5z"
        fill="#8B0000"
        stroke="#FFD700"
        strokeWidth="1"
      />
      
      {/* Text "CommuneCast" */}
      <text
        x="50"
        y="20"
        fontSize="14"
        fontWeight="bold"
        fill="#8B0000"
        fontFamily="Inter, sans-serif"
      >
        CommuneCast
      </text>
      
      {/* Subtitle */}
      <text
        x="50"
        y="35"
        fontSize="8"
        fill="#FFD700"
        fontFamily="Inter, sans-serif"
      >
        LIBRE • CHIFFRÉ • DÉCENTRALISÉ
      </text>
      
      {/* Revolutionary flame */}
      <path
        d="M170 15c2-5 6-8 8-3 1 3-1 6-3 8 4-2 8 1 7 5-1 4-5 5-8 3 1 4-2 7-6 6-3-1-4-5-2-8-4 1-7-2-6-6 1-3 5-4 7-2-1-2 1-4 3-3z"
        fill="#8B0000"
      />
      
      {/* Connection lines representing P2P */}
      <g stroke="#8B0000" strokeWidth="1" opacity="0.6">
        <circle cx="15" cy="50" r="2" fill="#8B0000" />
        <circle cx="35" cy="50" r="2" fill="#8B0000" />
        <circle cx="25" cy="55" r="2" fill="#8B0000" />
        <line x1="15" y1="50" x2="35" y2="50" />
        <line x1="15" y1="50" x2="25" y2="55" />
        <line x1="35" y1="50" x2="25" y2="55" />
      </g>
    </svg>
  );
};

export default Logo;