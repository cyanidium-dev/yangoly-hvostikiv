import { ILogoProps } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  variant = "black",
  width = 94,
  height = 40,
  ...props
}: ILogoProps) => {
  return (
    <Link {...props}>
      <Image
        src="/images/logo.mobile.png"
        alt="logo"
        width={width}
        height={height}
        className={variant === "black" ? "logo-white-mask" : ""}
      />
    </Link>
  );
};

export default Logo;
