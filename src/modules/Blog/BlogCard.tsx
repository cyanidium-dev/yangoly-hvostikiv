import { IBlogCardProps } from "@/shared/types";
import Image from "next/image";
import React from "react";

export default function BlogCard({ blogItem }: IBlogCardProps) {
  const { mainPhoto, date, title, description } = blogItem;

  return (
    <li className="max-w-[343px] h-[560px] pt-8 pb-5 px-6 bg-[#FCFCFC] rounded-[20px] shadow-blogCard">
      <Image
        src={mainPhoto}
        alt={title}
        width={756}
        height={1008}
        className="w-full h-[246px] mb-[26px] object-cover object-center rounded-[11.25px]"
      />
      <p className="mb-3 text-[16px] font-medium leading-[20.8px] text-black">
        {date}
      </p>
      <h2 className="mb-3 text-[20px] font-semibold leading-[26px]">{title}</h2>
      <p className="">{description}</p>
    </li>
  );
}
