import React from 'react';

const Button = ({ children, onClick, className, variant = 'primary', size = 'medium' }) => {
  const baseStyles = 'font-bold rounded-lg transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 ring-logobtbcolor relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-buttonColor to-logobtbcolor text-white shadow-lg hover:shadow-xl hover:scale-105 hover:brightness-110',
    secondary: 'bg-white text-buttonColor border-2 border-buttonColor hover:bg-buttonColor hover:text-white hover:scale-105',
    tertiary: 'bg-gradient-to-r from-buttonColor to-logobtbcolor text-white shadow-lg hover:shadow-xl hover:scale-105 brightness-110',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></span>
    </button>
  );
};

export default Button;