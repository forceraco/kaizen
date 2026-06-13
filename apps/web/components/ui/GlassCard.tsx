import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', strong = false, onClick }) => {
  return (
    <div
      className={`rounded-lg ${strong ? 'glass-strong' : 'glass'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
