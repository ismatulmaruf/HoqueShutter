import React from 'react';

const Logo = ({ className = "h-10" }) => {
    return (
        <svg
            viewBox="0 0 240 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Abstract Industrial Icon */}
            <rect x="10" y="15" width="12" height="50" rx="2" fill="#1D546C" />
            <rect x="58" y="15" width="12" height="50" rx="2" fill="#1D546C" />
            <path d="M22 25H58V33H22V25Z" fill="#0C2B4E" />
            <path d="M22 38H58V46H22V38Z" fill="#1A3D64" />
            <path d="M22 51H58V59H22V51Z" fill="#1D546C" />

            {/* Text Part */}
            <text
                x="85"
                y="45"
                fill="#0C2B4E"
                style={{ font: 'bold 28px Inter, sans-serif', letterSpacing: '-0.05em' }}
            >
                HOQUE
            </text>
            <text
                x="85"
                y="62"
                fill="#1D546C"
                style={{ font: '900 12px Inter, sans-serif', letterSpacing: '0.4em', textTransform: 'uppercase' }}
            >
                SHUTTERTECH
            </text>
        </svg>
    );
};

export default Logo;