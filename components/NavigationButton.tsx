import React from "react";
import { twMerge } from "tailwind-merge";

interface NavigationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const NavigationButton: React.FC<NavigationButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-full bg-black flex items-center justify-center hover:opacity-75 transition",
        className
      )}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
