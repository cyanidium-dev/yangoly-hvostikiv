import Image from "next/image";
import React, { ComponentProps } from "react";

interface ITailCardProps extends ComponentProps<"div"> {
  image: string;
  name: string;
  children?: React.ReactNode;
}

const TailCard = ({ image, name, children }: ITailCardProps) => {
  return (
    <div className="bg-white pb-5 xl:pb-8 rounded-[16px] flex flex-col gap-4 card-shadow">
      <div className="relative w-full aspect-[361/313] xl:aspect-[464/313] rounded-[16px]">
        <Image
          src={image}
          alt="Photo"
          fill
          className="object-cover  rounded-t-[16px]"
          sizes="(max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <p className="text-black text-[24px] leading-[130%] text-center">
        {name}
      </p>
      <div className="text-center">{children}</div>
    </div>
  );
};

export default TailCard;
