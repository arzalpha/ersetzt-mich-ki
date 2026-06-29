export default function PixelRobot({ size = 120 }: { size?: number }) {
  return (
    <div className="robot-float inline-block" style={{ width: size, height: size * 1.2 }}>
      <svg viewBox="0 0 100 120" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        {/* Antenna */}
        <rect x="47" y="0" width="6" height="6" fill="#00e5ff" rx="1" />
        <rect x="44" y="6" width="12" height="5" fill="#00e5ff" opacity="0.7" rx="1" />

        {/* Head */}
        <rect x="18" y="11" width="64" height="42" fill="#0d0d2b" rx="4" />
        <rect x="18" y="11" width="64" height="42" fill="none" stroke="#00e5ff" strokeWidth="1.5" rx="4" />
        <rect x="18" y="11" width="64" height="8" fill="#00e5ff" opacity="0.08" rx="4" />

        {/* Eyes with scan + blink animation */}
        <g className="robot-eyes">
          <g className="eye-blink">
            <rect x="26" y="24" width="18" height="12" fill="#00e5ff" opacity="0.15" rx="2" />
            <rect x="29" y="27" width="12" height="6" fill="#00e5ff" rx="1" />
            <rect x="29" y="27" width="12" height="6" fill="#00e5ff" rx="1" opacity="0.5" style={{ filter: 'blur(3px)' }} />
            <rect x="56" y="24" width="18" height="12" fill="#00e5ff" opacity="0.15" rx="2" />
            <rect x="59" y="27" width="12" height="6" fill="#00e5ff" rx="1" />
            <rect x="59" y="27" width="12" height="6" fill="#00e5ff" rx="1" opacity="0.5" style={{ filter: 'blur(3px)' }} />
          </g>
        </g>

        {/* Mouth bar */}
        <rect x="28" y="44" width="44" height="3" fill="#00e5ff" opacity="0.3" rx="1" />
        <rect x="28" y="44" width="28" height="3" fill="#00e5ff" opacity="0.7" rx="1" />

        {/* Neck */}
        <rect x="42" y="53" width="16" height="6" fill="#0d0d2b" />
        <rect x="42" y="53" width="16" height="6" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.4" />

        {/* Body */}
        <rect x="14" y="59" width="72" height="44" fill="#0d0d2b" rx="4" />
        <rect x="14" y="59" width="72" height="44" fill="none" stroke="#00e5ff" strokeWidth="1.5" rx="4" opacity="0.6" />

        {/* Chest panel */}
        <rect x="28" y="66" width="44" height="24" fill="#060614" rx="3" />
        <rect x="28" y="66" width="44" height="24" fill="none" stroke="#00e5ff" strokeWidth="1" rx="3" opacity="0.3" />

        {/* Chest lights */}
        <circle cx="36" cy="74" r="3" fill="#e500a4" className="chest-light" />
        <circle cx="50" cy="74" r="3" fill="#00e5ff" className="chest-light" style={{ animationDelay: '0.5s' }} />
        <circle cx="64" cy="74" r="3" fill="#00ff88" className="chest-light" style={{ animationDelay: '1s' }} />

        {/* Chest progress bar */}
        <rect x="32" y="82" width="36" height="3" fill="#00e5ff" opacity="0.15" rx="1" />
        <rect x="32" y="82" width="22" height="3" fill="#00e5ff" opacity="0.8" rx="1" />

        {/* Arms */}
        <rect x="4" y="61" width="10" height="28" fill="#0d0d2b" rx="3" />
        <rect x="4" y="61" width="10" height="28" fill="none" stroke="#00e5ff" strokeWidth="1" rx="3" opacity="0.4" />
        <rect x="3" y="89" width="12" height="8" fill="#0d0d2b" rx="2" />
        <rect x="3" y="89" width="12" height="8" fill="none" stroke="#00e5ff" strokeWidth="1" rx="2" opacity="0.4" />
        <rect x="86" y="61" width="10" height="28" fill="#0d0d2b" rx="3" />
        <rect x="86" y="61" width="10" height="28" fill="none" stroke="#00e5ff" strokeWidth="1" rx="3" opacity="0.4" />
        <rect x="85" y="89" width="12" height="8" fill="#0d0d2b" rx="2" />
        <rect x="85" y="89" width="12" height="8" fill="none" stroke="#00e5ff" strokeWidth="1" rx="2" opacity="0.4" />

        {/* Legs */}
        <rect x="26" y="103" width="18" height="14" fill="#0d0d2b" rx="3" />
        <rect x="26" y="103" width="18" height="14" fill="none" stroke="#00e5ff" strokeWidth="1" rx="3" opacity="0.4" />
        <rect x="56" y="103" width="18" height="14" fill="#0d0d2b" rx="3" />
        <rect x="56" y="103" width="18" height="14" fill="none" stroke="#00e5ff" strokeWidth="1" rx="3" opacity="0.4" />

        {/* Feet */}
        <rect x="22" y="115" width="24" height="5" fill="#00e5ff" opacity="0.4" rx="2" />
        <rect x="54" y="115" width="24" height="5" fill="#00e5ff" opacity="0.4" rx="2" />
      </svg>
    </div>
  )
}
