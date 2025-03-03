import Button from "@/shared/components/Button/Button";
import { IBlogCardProps } from "@/shared/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function BlogCard({ blogItem }: IBlogCardProps) {
  const { mainPhoto, date, title, description } = blogItem;

  return (
    <li className="max-w-[343px] h-[560px] pt-8 pb-5 px-6 bg-[#FCFCFC] rounded-[20px] shadow-blogCard">
      <Link href="">
        <Image
          src={mainPhoto}
          alt={title}
          width={756}
          height={1008}
          className="w-full h-[246px] mb-[26px] object-cover object-center rounded-[11.25px]"
        />
      </Link>
      <p className="mb-3 text-[16px] font-medium leading-[20.8px] text-black">
        {date}
      </p>
      <Link href="">
        <h2
          className="mb-3 text-[20px] font-semibold leading-[26px] line-clamp-2 focus-visible:text-primary-gray xl:hover:text-primary-gray 
        transition duration-300 ease-out"
        >
          {title}
        </h2>
      </Link>
      <p className="mb-5 font-normal text-[14px] leading-[18.2px] line-clamp-4">
        {description}
      </p>
      <Link href="">
        <Button text="Детальніше" fullWidth />
      </Link>
    </li>
  );
}
