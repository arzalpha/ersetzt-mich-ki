import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00e5ff',
          dim: '#00b8cc',
          glow: 'rgba(0,229,255,0.15)',
        },
        magenta: {
          DEFAULT: '#e500a4',
          dim: '#b5007f',
          glow: 'rgba(229,0,164,0.15)',
        },
        safe: '#00ff88',
        warn: '#ffe600',
        danger: '#e500a4',
        space: '#060614',
        card: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        scan: 'scan 2.4s ease-in-out infinite',
        blink: 'blink 4s ease-in-out infinite',
        pulse_slow: 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '40%': { transform: 'translateX(6px)' },
          '60%': { transform: 'translateX(-6px)' },
        },
        blink: {
          '0%, 90%, 100%': { opacity: '1' },
          '95%': { opacity: '0.1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
