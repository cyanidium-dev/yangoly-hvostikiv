import React from "react";
import { HeroMaskMobile } from "../../../public/images/icons";
// import Image from "next/image";
import FundraisingGoal from "../FundraisingGoal/FundraisingGoal";
import { IHeroTranslation } from "@/shared/types";

interface IHeroProps {
  translation: IHeroTranslation;
}

const Hero = ({ translation }: IHeroProps) => {
  const { title, subtitle, fundraisingTitle, goal, currency } = translation;
  return (
    <section className="pt-[65px] xl:pt-[105px]">
      <div className="px-4">
        <h1 className="text-primary-green text-[30px] font-bold leading-[130%] text-center pt-8 xl:pt-[94px]">
          {title}
        </h1>
        <h2 className="mt-2 text-[18px] font-normal leading-[130%] italic text-center">
          {subtitle}
        </h2>
      </div>
      <FundraisingGoal
        fundraisingTitle={fundraisingTitle}
        goal={goal}
        currency={currency}
        totalAmount={30000}
        currentAmount={10000}
      />
      <div className="h-[26rem]">
        <HeroMaskMobile />
      </div>
    </section>
  );
};

export default Hero;
