import { IAboutUsTranslation } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = ({ translation }: { translation: IAboutUsTranslation }) => {
  const {
    title,
    charitableFund,
    organisation,
    firstParagraph,
    secondParagraph,
    partnerLink,
    reportingLing,
  } = translation;
  return (
    <section className="container  flex flex-col xl:flex-row xl:items-center xl:bg-white xl:justify-between  mx-auto gap-6 xl:gap-0">
      <div className="flex flex-col  xl:px-[40px]  gap-6 xl:w-1/2 xl:order-2">
        <h2 className="text-[24px] xl:text-[32px]  font-normal leading-[130%] text-black  text-left">
          {title}
        </h2>
        <p className=" text-[18px] text-black font-normal leading-[130%]">
          {charitableFund}{" "}
          <span className="font-bold">&quot;{organisation}&quot;</span>{" "}
          {firstParagraph}
        </p>
        <p className="text-[18px] text-black font-normal leading-[130%]">
          {secondParagraph}
        </p>
        <div className="flex flex-col gap-4 xl:flex-row">
          <Link
            className="uppercase px-6 py-3 bg-primary-green text-[#F8F7F7] text-center rounded-lg transition-colors duration-300 hover:bg-primary-green/90"
            href="/"
          >
            {partnerLink}
          </Link>
          <Link
            className="uppercase px-6 py-3 bg-white text-primary-green text-center rounded-lg border border-primary-green transition-colors duration-300 hover:bg-primary-green hover:text-white"
            href="/"
          >
            {reportingLing}
          </Link>
        </div>
      </div>

      <div className="w-full xl:w-1/2 xl:order-1">
        <div className="grid grid-cols-2 gap-4 xl:gap-5 ">
          <div className="relative w-full aspect-[175/328] xl:aspect-auto">
            <Image
              src="/images/about1.jpg"
              alt="Owner"
              fill
              className="object-cover rounded-lg xl:rounded-[16px]"
              sizes="(max-width: 1280px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-col gap-4 xl:gap-5 h-full">
            <div className="relative w-full aspect-[170/156] xl:aspect-[329/331] ">
              <Image
                src="/images/about2.jpg"
                alt="Owner"
                fill
                className="object-cover rounded-lg xl:rounded-[16px]"
                sizes="(max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full aspect-[170/156] xl:aspect-[329/331] ">
              <Image
                src="/images/about3.jpg"
                alt="Owner"
                fill
                className="object-cover rounded-lg xl:rounded-[16px]"
                sizes="(max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
