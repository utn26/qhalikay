import React, { forwardRef, InputHTMLAttributes } from 'react';
import componentClasses from './componentClasses';
import { classNames } from 'utils';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  className?: string,
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    variant = 'primary',
    className = '',
    ...rest
  }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(`${componentClasses}`, className)}
        {...rest}
      />
    );
  }
);

export default Input;
