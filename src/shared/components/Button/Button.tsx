import { cn } from "@/shared/utils";
import { IButtonProps } from "@/shared/types";

const Button = ({
  text,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: IButtonProps) => {
  const baseStyles =
    "text-white uppercase py-4 px-6 rounded-[12px] transition-colors duration-300";

  const variantStyles = {
    primary: "bg-primary-green hover:bg-primary-green/90",
    secondary: "bg-primary-orange hover:bg-primary-orange/90",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], widthStyle, className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
