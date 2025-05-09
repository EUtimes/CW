import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = false,
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl overflow-hidden shadow-md border border-gray-100
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;