import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: '#060614',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
        }}
      >
        <svg viewBox="0 0 40 48" width={44} height={52}>
          {/* Antenna */}
          <rect x="18" y="0" width="4" height="4" fill="#00e5ff" rx="1" />
          <rect x="15" y="4" width="10" height="3" fill="#00e5ff" opacity="0.7" rx="1" />

          {/* Head */}
          <rect x="4" y="7" width="32" height="24" fill="#0d0d2b" rx="3" />
          <rect x="4" y="7" width="32" height="24" fill="none" stroke="#00e5ff" strokeWidth="1.5" rx="3" />

          {/* Eyes */}
          <rect x="9" y="14" width="9" height="7" fill="#00e5ff" opacity="0.15" rx="1.5" />
          <rect x="11" y="16" width="5" height="3" fill="#00e5ff" rx="1" />
          <rect x="22" y="14" width="9" height="7" fill="#00e5ff" opacity="0.15" rx="1.5" />
          <rect x="24" y="16" width="5" height="3" fill="#00e5ff" rx="1" />

          {/* Mouth bar */}
          <rect x="10" y="25" width="20" height="2" fill="#00e5ff" opacity="0.4" rx="1" />
          <rect x="10" y="25" width="12" height="2" fill="#00e5ff" opacity="0.8" rx="1" />

          {/* Neck */}
          <rect x="16" y="31" width="8" height="4" fill="#0d0d2b" />

          {/* Body (mini) */}
          <rect x="6" y="35" width="28" height="13" fill="#0d0d2b" rx="3" />
          <rect x="6" y="35" width="28" height="13" fill="none" stroke="#00e5ff" strokeWidth="1.2" rx="3" opacity="0.6" />

          {/* Chest lights */}
          <circle cx="14" cy="41" r="2" fill="#e500a4" />
          <circle cx="20" cy="41" r="2" fill="#00e5ff" />
          <circle cx="26" cy="41" r="2" fill="#00ff88" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
