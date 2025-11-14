interface JejumZIconProps {
  size?: number;
  className?: string;
}

export function JejumZIcon({ size = 40, className = '' }: JejumZIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - represents timer/cycle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#gradient1)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="141 141"
        strokeDashoffset="35"
      />
      
      {/* Sun rays - top right (morning/energy) */}
      <g className="sun-rays">
        <line x1="70" y1="30" x2="78" y2="22" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="78" y1="38" x2="88" y2="38" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="70" y1="50" x2="80" y2="50" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      
      {/* Moon crescent - bottom left (night/rest) */}
      <path
        d="M 28 65 A 12 12 0 1 1 28 75 A 8 8 0 1 0 28 65"
        fill="#3B82F6"
      />
      
      {/* Center dot - zen/balance point */}
      <circle cx="50" cy="50" r="4" fill="#6366F1" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
