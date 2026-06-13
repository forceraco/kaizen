import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-full font-bold uppercase tracking-widest transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-gradient-to-r from-accent to-[#7C5CFF] text-white shadow-lg shadow-accent/20',
    secondary: 'glass border border-stroke-glass text-text-primary hover:bg-white/5',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
