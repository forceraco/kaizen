'use client';

import React from 'react';

interface RadarChartProps {
  data: number[];
  labels: string[];
  size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, labels, size = 300 }) => {
  const padding = 40;
  const center = size / 2;
  const radius = size / 2 - padding;
  const angleStep = (Math.PI * 2) / labels.length;

  // Calculate points for the polygon
  const points = data.map((value, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = center + radius * (value / 100) * Math.cos(angle);
    const y = center + radius * (value / 100) * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  // Calculate grid circles
  const grids = [0.2, 0.4, 0.6, 0.8, 1].map((r) => (
    <circle
      key={r}
      cx={center}
      cy={center}
      r={radius * r}
      fill="none"
      stroke="var(--stroke-glass)"
      strokeWidth="1"
    />
  ));

  // Calculate axis lines and labels
  const axes = labels.map((label, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x2 = center + radius * Math.cos(angle);
    const y2 = center + radius * Math.sin(angle);
    const lx = center + (radius + 20) * Math.cos(angle);
    const ly = center + (radius + 20) * Math.sin(angle);

    return (
      <g key={i}>
        <line
          x1={center}
          y1={center}
          x2={x2}
          y2={y2}
          stroke="var(--stroke-glass)"
          strokeWidth="1"
        />
        <text
          x={lx}
          y={ly}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--text-tertiary)"
          fontSize="8"
          fontWeight="bold"
        >
          {label.split(' ')[0]}
        </text>
      </g>
    );
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--color-accent-2)" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {grids}
      {axes}
      <polygon
        points={points}
        fill="url(#radarGradient)"
        stroke="var(--color-accent)"
        strokeWidth="2"
      />
    </svg>
  );
};
