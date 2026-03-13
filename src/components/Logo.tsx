interface LogoProps {
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({
  variant = "default",
  size = "md",
  className = "",
}: LogoProps) {
  const sizeMap = {
    sm: { height: 28, iconSize: 24, textSize: 16, gap: 6 },
    md: { height: 36, iconSize: 32, textSize: 20, gap: 8 },
    lg: { height: 48, iconSize: 42, textSize: 28, gap: 10 },
  };

  const s = sizeMap[size];
  const isLight = variant === "light";

  // Colors
  const primaryColor = isLight ? "#FFFFFF" : "#0B2545";
  const accentStart = "#1E3A8A";
  const accentEnd = "#3B82F6";
  const subtitleColor = isLight ? "rgba(255,255,255,0.7)" : "#6B7280";
  const nodeGlow = isLight ? "rgba(96,165,250,0.5)" : "rgba(59,130,246,0.3)";

  const gradientId = `logo-gradient-${variant}`;
  const glowId = `logo-glow-${variant}`;

  return (
    <svg
      height={s.height}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: s.height, width: "auto" }}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={accentStart} />
          <stop offset="100%" stopColor={accentEnd} />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Brain/Neural Icon */}
      <g transform="translate(4, 4)" filter={`url(#${glowId})`}>
        {/* Outer brain silhouette */}
        <path
          d="M20 2C13.5 2 8 6.5 8 13c0 3 1.2 5.5 3 7.5L20 38l9-17.5c1.8-2 3-4.5 3-7.5C32 6.5 26.5 2 20 2z"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />

        {/* Neural network nodes */}
        {/* Central node */}
        <circle cx="20" cy="14" r="3.5" fill={`url(#${gradientId})`} />

        {/* Top nodes */}
        <circle cx="14" cy="8" r="2" fill={accentEnd} />
        <circle cx="26" cy="8" r="2" fill={accentStart} />

        {/* Side nodes */}
        <circle cx="10" cy="16" r="2" fill={accentEnd} opacity="0.8" />
        <circle cx="30" cy="16" r="2" fill={accentStart} opacity="0.8" />

        {/* Bottom nodes */}
        <circle cx="15" cy="22" r="1.8" fill={accentEnd} opacity="0.7" />
        <circle cx="25" cy="22" r="1.8" fill={accentStart} opacity="0.7" />

        {/* Convergence node */}
        <circle
          cx="20"
          cy="28"
          r="2.2"
          fill={`url(#${gradientId})`}
          opacity="0.9"
        />

        {/* Neural connections */}
        {/* Top to center */}
        <line
          x1="14"
          y1="8"
          x2="20"
          y2="14"
          stroke={accentEnd}
          strokeWidth="1.2"
          opacity="0.5"
        />
        <line
          x1="26"
          y1="8"
          x2="20"
          y2="14"
          stroke={accentStart}
          strokeWidth="1.2"
          opacity="0.5"
        />

        {/* Center to sides */}
        <line
          x1="20"
          y1="14"
          x2="10"
          y2="16"
          stroke={accentEnd}
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1="20"
          y1="14"
          x2="30"
          y2="16"
          stroke={accentStart}
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Cross connections */}
        <line
          x1="14"
          y1="8"
          x2="10"
          y2="16"
          stroke={accentEnd}
          strokeWidth="0.8"
          opacity="0.3"
        />
        <line
          x1="26"
          y1="8"
          x2="30"
          y2="16"
          stroke={accentStart}
          strokeWidth="0.8"
          opacity="0.3"
        />

        {/* Center to bottom */}
        <line
          x1="20"
          y1="14"
          x2="15"
          y2="22"
          stroke={accentEnd}
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1="20"
          y1="14"
          x2="25"
          y2="22"
          stroke={accentStart}
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Sides to bottom */}
        <line
          x1="10"
          y1="16"
          x2="15"
          y2="22"
          stroke={accentEnd}
          strokeWidth="0.8"
          opacity="0.3"
        />
        <line
          x1="30"
          y1="16"
          x2="25"
          y2="22"
          stroke={accentStart}
          strokeWidth="0.8"
          opacity="0.3"
        />

        {/* Bottom to convergence */}
        <line
          x1="15"
          y1="22"
          x2="20"
          y2="28"
          stroke={accentEnd}
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="25"
          y1="22"
          x2="20"
          y2="28"
          stroke={accentStart}
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Tiny pulse dots on connections */}
        <circle cx="17" cy="11" r="0.8" fill="white" opacity="0.7" />
        <circle cx="23" cy="11" r="0.8" fill="white" opacity="0.7" />
        <circle cx="17.5" cy="25" r="0.7" fill="white" opacity="0.5" />
      </g>

      {/* Text */}
      <g transform="translate(48, 0)">
        {/* "Neural" */}
        <text
          x="0"
          y="22"
          fill={primaryColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          Neural
        </text>
        {/* "Guru" */}
        <text
          x="62"
          y="22"
          fill={`url(#${gradientId})`}
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          Guru
        </text>
        {/* Tagline */}
        <text
          x="0"
          y="36"
          fill={subtitleColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
          fontSize="7.5"
          fontWeight="500"
          letterSpacing="2"
        >
          AI-POWERED LEARNING
        </text>
      </g>

      {/* Accent dot */}
      <circle cx="155" cy="16" r="2" fill={accentEnd} opacity="0.4" />
    </svg>
  );
}
