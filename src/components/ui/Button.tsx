import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-indigo-900 text-white hover:bg-indigo-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl',
    outline: 'border border-indigo-900 text-indigo-900 hover:bg-indigo-50',
  };
  
  const sizes = {
    sm: 'h-9 px-3 rounded-md text-sm',
    md: 'h-10 py-2 px-4 text-md',
    lg: 'h-12 px-8 rounded-md text-lg',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;