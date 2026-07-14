export function RiverClean({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="skyClean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe3e0" />
          <stop offset="100%" stopColor="#eaf6ee" />
        </linearGradient>
        <linearGradient id="waterClean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A90D9" />
          <stop offset="100%" stopColor="#1c6f8f" />
        </linearGradient>
        <linearGradient id="hillClean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f7d3a" />
          <stop offset="100%" stopColor="#1B4D1B" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#skyClean)" />
      <path d="M0 260 Q120 190 260 240 T520 220 T800 260 V0 H0 Z" fill="url(#hillClean)" opacity="0.85" />
      <path d="M0 320 Q150 260 300 300 T600 290 T800 320 V0 H0 Z" fill="#3d8c4a" opacity="0.55" />
      <path
        d="M0 420 C120 380 180 460 300 430 C420 400 460 470 560 440 C650 415 720 460 800 430 V600 H0 Z"
        fill="url(#waterClean)"
      />
      <path
        d="M0 440 C130 410 190 470 310 450 C430 430 470 480 570 460 C660 442 730 470 800 450"
        stroke="#eaf6ee"
        strokeOpacity="0.35"
        strokeWidth="3"
        fill="none"
      />
      <g fill="#eaf6ee" opacity="0.5">
        <circle cx="120" cy="470" r="2.5" />
        <circle cx="260" cy="460" r="2" />
        <circle cx="420" cy="480" r="2.5" />
        <circle cx="600" cy="470" r="2" />
      </g>
      <g opacity="0.8">
        <path d="M70 470 q10 -22 20 0" stroke="#123" strokeOpacity="0.25" strokeWidth="3" fill="none" />
        <ellipse cx="80" cy="472" rx="16" ry="5" fill="#5C4033" opacity="0.6" />
      </g>
    </svg>
  );
}

export function RiverPolluted({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="skyPolluted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8c8c86" />
          <stop offset="100%" stopColor="#c9c3ad" />
        </linearGradient>
        <linearGradient id="waterPolluted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b5a3a" />
          <stop offset="100%" stopColor="#3d3424" />
        </linearGradient>
        <linearGradient id="hillPolluted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c5c42" />
          <stop offset="100%" stopColor="#3a3a28" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#skyPolluted)" />
      <path d="M0 260 Q120 200 260 245 T520 225 T800 260 V0 H0 Z" fill="url(#hillPolluted)" opacity="0.8" />
      <g opacity="0.55">
        <rect x="600" y="150" width="14" height="90" fill="#2b2b22" />
        <rect x="622" y="130" width="10" height="110" fill="#2b2b22" />
        <rect x="580" y="170" width="10" height="70" fill="#2b2b22" />
        <circle cx="607" cy="145" r="10" fill="#6b6b58" opacity="0.6" />
      </g>
      <path
        d="M0 420 C120 385 180 455 300 428 C420 400 460 465 560 435 C650 412 720 452 800 425 V600 H0 Z"
        fill="url(#waterPolluted)"
      />
      <g fill="#8a7a4f" opacity="0.55">
        <ellipse cx="140" cy="450" rx="34" ry="9" />
        <ellipse cx="330" cy="470" rx="26" ry="7" />
        <ellipse cx="520" cy="450" rx="30" ry="8" />
        <ellipse cx="680" cy="465" rx="22" ry="6" />
      </g>
      <g fill="#c9c3ad" opacity="0.5">
        <rect x="200" y="455" width="10" height="6" rx="1" />
        <rect x="410" y="440" width="8" height="8" rx="1" />
        <rect x="600" y="460" width="12" height="5" rx="1" />
        <circle cx="480" cy="465" r="4" />
      </g>
      <path d="M0 500 L800 500" stroke="#3a3424" strokeOpacity="0.4" strokeWidth="18" />
    </svg>
  );
}
