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
      className={`rounded-lg transition-all duration-200 ${strong ? 'glass-strong' : 'glass'} ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
