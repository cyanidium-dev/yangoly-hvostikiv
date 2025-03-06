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
    "text-white uppercase py-3 px-6 rounded-[28px] transition-all duration-300 text-[18px] leading-[110%] font-bold";

  const variantStyles = {
    primary: "bg-primary-green hover:bg-primary-green/90  active:scale-95",
    secondary: "bg-primary-orange hover:bg-primary-orange/90  active:scale-95",
    outline:
      "border border-primary-green text-primary-green hover:bg-primary-green hover:text-white  active:scale-95",
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
