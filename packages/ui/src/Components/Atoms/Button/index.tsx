import React, { ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import componentClasses from './componentClasses';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  onClick: () => void;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, onClick, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={className + componentClasses}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
