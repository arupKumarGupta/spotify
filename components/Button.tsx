import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface BUttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, BUttonProps>(
  ({ children, className, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          "w-full rounded-full border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-black hover:opacity-75 transition",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
