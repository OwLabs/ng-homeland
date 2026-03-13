import { motion } from "motion/react";

interface NeuralNetworkBgProps {
  variant?: "light" | "dark";
  className?: string;
}

// Pre-defined node positions for a natural, organic neural network feel
const nodes = [
  // Cluster 1 - top left
  { x: 8, y: 12, r: 3 },
  { x: 15, y: 8, r: 2.5 },
  { x: 22, y: 18, r: 4 },
  { x: 12, y: 25, r: 2 },
  { x: 5, y: 32, r: 3.5 },

  // Cluster 2 - top center
  { x: 38, y: 6, r: 2.5 },
  { x: 45, y: 14, r: 3.5 },
  { x: 50, y: 5, r: 2 },
  { x: 55, y: 20, r: 3 },

  // Cluster 3 - top right
  { x: 72, y: 10, r: 3 },
  { x: 80, y: 6, r: 2 },
  { x: 85, y: 18, r: 4 },
  { x: 92, y: 12, r: 2.5 },
  { x: 78, y: 22, r: 2 },

  // Cluster 4 - middle left
  { x: 6, y: 48, r: 2.5 },
  { x: 18, y: 42, r: 3 },
  { x: 25, y: 55, r: 4 },
  { x: 10, y: 60, r: 2 },

  // Cluster 5 - center
  { x: 42, y: 38, r: 3.5 },
  { x: 50, y: 45, r: 4.5 },
  { x: 58, y: 35, r: 3 },
  { x: 48, y: 55, r: 2.5 },
  { x: 55, y: 50, r: 2 },
  { x: 62, y: 48, r: 3 },

  // Cluster 6 - middle right
  { x: 78, y: 40, r: 2.5 },
  { x: 88, y: 35, r: 3 },
  { x: 95, y: 45, r: 2 },
  { x: 82, y: 52, r: 3.5 },

  // Cluster 7 - bottom left
  { x: 8, y: 78, r: 3 },
  { x: 18, y: 72, r: 2.5 },
  { x: 25, y: 82, r: 3.5 },
  { x: 15, y: 88, r: 2 },

  // Cluster 8 - bottom center
  { x: 40, y: 75, r: 2.5 },
  { x: 50, y: 70, r: 3 },
  { x: 55, y: 80, r: 4 },
  { x: 45, y: 88, r: 2 },
  { x: 60, y: 72, r: 2.5 },

  // Cluster 9 - bottom right
  { x: 75, y: 70, r: 3 },
  { x: 85, y: 75, r: 2.5 },
  { x: 90, y: 68, r: 3.5 },
  { x: 80, y: 85, r: 2 },
  { x: 95, y: 82, r: 3 },
];

// Compute connections between nearby nodes
function getConnections(maxDist: number = 22) {
  const connections: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    dist: number;
  }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        connections.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          dist,
        });
      }
    }
  }
  return connections;
}

const connections = getConnections();

export function NeuralNetworkBg({
  variant = "light",
  className = "",
}: NeuralNetworkBgProps) {
  const isDark = variant === "dark";
  const nodeColor = isDark ? "#60A5FA" : "#1E3A8A";
  const lineColor = isDark ? "#3B82F6" : "#1E3A8A";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient for larger nodes */}
            <radialGradient
              id={`node-glow-${variant}`}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor={nodeColor}
                stopOpacity={isDark ? 0.4 : 0.15}
              />
              <stop offset="100%" stopColor={nodeColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connection lines */}
          <g>
            {connections.map((conn, i) => {
              const opacity = isDark
                ? Math.max(0.04, 0.12 - conn.dist * 0.004)
                : Math.max(0.03, 0.08 - conn.dist * 0.003);
              return (
                <line
                  key={`conn-${i}`}
                  x1={conn.x1}
                  y1={conn.y1}
                  x2={conn.x2}
                  y2={conn.y2}
                  stroke={lineColor}
                  strokeWidth="0.15"
                  opacity={opacity}
                />
              );
            })}
          </g>

          {/* Nodes */}
          <g>
            {nodes.map((node, i) => (
              <g key={`node-${i}`}>
                {/* Outer glow for larger nodes */}
                {node.r >= 3.5 && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r * 3}
                    fill={`url(#node-glow-${variant})`}
                  />
                )}
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r * 0.35}
                  fill={nodeColor}
                  opacity={
                    isDark
                      ? node.r >= 3.5
                        ? 0.25
                        : 0.12
                      : node.r >= 3.5
                        ? 0.12
                        : 0.06
                  }
                />
              </g>
            ))}
          </g>

          {/* A few animated "pulse" nodes for subtle life */}
          {[nodes[2], nodes[9], nodes[19], nodes[34], nodes[39]].map(
            (node, i) => (
              <circle
                key={`pulse-${i}`}
                cx={node.x}
                cy={node.y}
                r={node.r * 0.25}
                fill={isDark ? "#93C5FD" : "#3B82F6"}
                opacity={isDark ? 0.3 : 0.15}
              >
                <animate
                  attributeName="r"
                  values={`${node.r * 0.25};${node.r * 0.6};${node.r * 0.25}`}
                  dur={`${3 + i * 1.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values={isDark ? "0.3;0.08;0.3" : "0.15;0.04;0.15"}
                  dur={`${3 + i * 1.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ),
          )}
        </svg>
      </motion.div>
    </div>
  );
}
