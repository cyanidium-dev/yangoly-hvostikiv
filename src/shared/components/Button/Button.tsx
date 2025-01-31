import React from "react";
import { cn } from "@/shared/utils";
import { ButtonVariant } from "@/shared/types";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  text,
  variant = "primary",
  fullWidth = false,
  onClick,
  className,
  ...props
}) => {
  const baseStyles =
    "text-white uppercase py-4 px-6 rounded-[12px] transition-colors duration-300";

  const variantStyles = {
    primary: "bg-primary-green hover:bg-primary-green/90",
    secondary: "bg-primary-orange hover:bg-primary-orange/90",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], widthStyle, className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
