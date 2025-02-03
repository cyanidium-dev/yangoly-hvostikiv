import { IAboutOwnerTranslation } from "@/shared/types";
import Image from "next/image";

const AboutOwner = ({
  translation,
}: {
  translation: IAboutOwnerTranslation;
}) => {
  const { title, firstParagraph, secondParagraph, boldText } = translation;
  return (
    <section className="container ml-auto mr-auto pt-10 px-4 ">
      <div className="flex flex-col xl:bg-white xl:rounded-[16px] xl:flex-row gap-6 xl:gap-0">
        <div className="xl:flex xl:flex-col xl:justify-center xl:gap-6 xl:w-1/2 xl:pl-[20px] xl:pr-[40px]">
          <h2 className="text-[24px] xl:text-[32px]  font-normal leading-[130%] text-black text-left">
            {title}
          </h2>
          <p className=" text-[18px] text-black font-normal leading-[130%]">
            {firstParagraph}
          </p>
          <p className=" text-[18px] text-black font-normal leading-[130%]">
            {secondParagraph} <span className="font-bold">{boldText}</span>
          </p>
        </div>
        <div className="relative w-full aspect-[353/344]  xl:aspect-auto xl:w-1/2 xl:h-[689px]">
          <Image
            src="/images/owner.jpg"
            alt="Owner"
            fill
            className="object-cover rounded-lg xl:rounded-none  xl:rounded-r-[16px]"
            sizes="(max-width: 1280px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
