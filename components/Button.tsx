import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-cyc-blue px-8 py-3 text-sm font-normal tracking-wide transition-colors hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;