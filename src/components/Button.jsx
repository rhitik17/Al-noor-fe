
import React from 'react';

const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  
  const variantStyles = {
    primary: 'bg-primary-blue hover:bg-blue-600 text-white',
    secondary: 'bg-secondary-blue hover:bg-gray-600 text-white',
    danger: 'bg-status-danger hover:bg-red-600 text-white',
    success: 'bg-status-success hover:bg-green-600 text-white',
  };

 
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4',
    large: 'py-3 px-5 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} ${sizeStyles[size]} rounded transition duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
