import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', strong = false }) => {
  return (
    <div className={`rounded-lg ${strong ? 'glass-strong' : 'glass'} ${className}`}>
      {children}
    </div>
  );
};
