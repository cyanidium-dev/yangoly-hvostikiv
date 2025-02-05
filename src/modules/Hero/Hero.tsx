import Image from "next/image";
import { HeroMaskDesktop, HeroMaskMobile } from "../../../public/images/icons";
import FundraisingGoal from "../FundraisingGoal/FundraisingGoal";
import { IHeroProps } from "@/shared/types";

const Hero = ({ translation }: IHeroProps) => {
  const { title, subtitle, fundraisingTitle, goal, currency } = translation;
  return (
    <section className="pt-[65px] xl:pt-[105px]">
      <div className="px-4">
        <h1 className="text-primary-green text-[30px] font-bold leading-[130%] text-center pt-8 xl:pt-[94px]">
          {title}
        </h1>
        <h2 className="mt-2 text-[18px] mb-[158px] xl:mb-[280px] font-normal leading-[130%] italic text-center">
          {subtitle}
        </h2>
      </div>
      <div className="relative">
        <div className="absolute xl:hidden left-1/2 transform -translate-x-1/2 xl:left-[270px] xl:bottom-[50px]  bottom-[220px] z-10 w-full">
          <FundraisingGoal
            fundraisingTitle={fundraisingTitle}
            goal={goal}
            currency={currency}
            totalAmount={30000}
            currentAmount={10000}
            imageVariant="middle"
            styles={{ titleClassName: "xl:text-[32px]" }}
          />
        </div>
        <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 xl:left-[270px] xl:bottom-[50px]  bottom-[220px] z-10 w-full">
          <FundraisingGoal
            fundraisingTitle={fundraisingTitle}
            goal={goal}
            currency={currency}
            totalAmount={30000}
            currentAmount={10000}
            imageVariant="big"
            styles={{ titleClassName: "xl:text-[32px]" }}
          />
        </div>

        <div className="absolute bottom-[3px] left-1/2 transform -translate-x-1/2 w-[390px] xl:transform-none xl:left-auto xl:right-10 xl:bottom-[-18px] xl:w-[916px] xl:h-[487px]">
          <div className="relative h-[300px] w-[390px] xl:w-[916px] xl:h-[487px]">
            {/* Пес */}
            <div className="absolute left-1/3 bottom-0 transform -translate-x-1/2 xl:left-[40%] xl:bottom-[20px] z-10 w-[225px] h-[208px] xl:w-[526px] xl:h-[487px]">
              <Image
                src="/images/dog.mobile.png"
                alt="Dog"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Сірий кіт */}
            <div className="absolute left-[50%] bottom-[40px] xl:left-[60%] xl:bottom-[120px] z-20 w-[145px] h-[135px] xl:w-[339px] xl:h-[316px]">
              <Image
                src="/images/gray-cat.mobile.png"
                alt="Gray Cat"
                fill
                className="object-contain"
              />
            </div>

            {/* Рудий кіт */}
            <div className="absolute left-[30%] bottom-[-10px] xl:left-[45%] xl:bottom-[0] z-30 w-[234px] h-[129px] xl:w-[545px] xl:h-[302px]">
              <Image
                src="/images/orange-cat.mobile.png"
                alt="Orange Cat"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <HeroMaskMobile className="h-[406px] w-full xl:hidden" />
        <HeroMaskDesktop className="hidden xl:block w-full h-[338px]" />
      </div>
    </section>
  );
};

export default Hero;
