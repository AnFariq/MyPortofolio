/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced web3 color palette
        'primary-dark': '#060810',
        'secondary-dark': '#0f1419',
        'accent-dark': '#1a1f2e',
        'card-dark': '#0d1117',
        'border-dark': '#21262d',
        'surface-dark': '#161b22',
        
        // Professional accent colors
        'accent-gold': '#f59e0b',
        'accent-amber': '#fbbf24',
        'accent-blue': '#3b82f6',
        'accent-cyan': '#06b6d4',
        'accent-purple': '#8b5cf6',
        'accent-pink': '#ec4899',
        'accent-emerald': '#10b981',
        
        // Text colors with better contrast
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-muted': '#94a3b8',
        'text-dim': '#64748b',
        
        // Semantic colors
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6',
      },
      backgroundImage: {
        // Sophisticated gradients
        'gradient-primary': 'linear-gradient(135deg, #060810 0%, #0f1419 50%, #1a1f2e 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        'gradient-hero': 'radial-gradient(ellipse at top, #0f1419 0%, #060810 50%, #030508 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(13, 17, 23, 0.9), rgba(22, 27, 34, 0.8))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        
        // Accent gradients
        'gradient-gold': 'linear-gradient(135deg, #f59e0b, #fbbf24, #fcd34d)',
        'gradient-blue': 'linear-gradient(135deg, #3b82f6, #06b6d4, #0ea5e9)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc)',
        'gradient-text': 'linear-gradient(135deg, #f59e0b, #fbbf24)',
        'gradient-border': 'linear-gradient(135deg, #3b82f6, #f59e0b)',
        
        // Mesh gradients for web3 aesthetic
        'mesh-primary': 'radial-gradient(at 40% 20%, #f59e0b 0px, transparent 50%), radial-gradient(at 80% 0%, #3b82f6 0px, transparent 50%), radial-gradient(at 0% 50%, #8b5cf6 0px, transparent 50%), radial-gradient(at 80% 50%, #06b6d4 0px, transparent 50%), radial-gradient(at 0% 100%, #10b981 0px, transparent 50%), #060810',
      },
      boxShadow: {
        // Enhanced shadow system
        'accent-gold': '0 0 20px rgba(245, 158, 11, 0.4), 0 0 40px rgba(245, 158, 11, 0.2), 0 0 80px rgba(245, 158, 11, 0.1)',
        'accent-blue': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 80px rgba(59, 130, 246, 0.1)',
        'accent-purple': '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), 0 0 80px rgba(139, 92, 246, 0.1)',
        'card-modern': '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 80px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'button-hover': '0 8px 25px rgba(245, 158, 11, 0.5), 0 0 50px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1), inset 0 0 40px rgba(245, 158, 11, 0.05)',
      },
      backdropBlur: {
        'glass': '20px',
        'strong': '40px',
      },
      animation: {
        // Enhanced animations
        'glow-gold': 'glow-gold 3s ease-in-out infinite alternate',
        'glow-blue': 'glow-blue 3s ease-in-out infinite alternate',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 10s ease-in-out infinite',
        'border-rotate': 'border-rotate 8s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-gold': {
          '0%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.6), 0 0 80px rgba(245, 158, 11, 0.3)' },
        },
        'glow-blue': {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(-2deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}