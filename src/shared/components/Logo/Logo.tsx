"use client";
import { ILogoProps } from "@/shared/types";
import clsx from "clsx";
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
        priority
        className={clsx(variant === "black" ? "logo-white-mask" : "")}
      />
    </Link>
  );
};

export default Logo;
