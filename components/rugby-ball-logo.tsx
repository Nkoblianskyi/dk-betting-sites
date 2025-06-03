export default function RugbyBallLogo() {
  return (
    <div className="w-12 h-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] to-[#5D2906] rounded-full transform rotate-45 animate-pulse-glow"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white transform -rotate-45"
        >
          <ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1" />
          <line x1="7" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1" />
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
    </div>
  )
}
