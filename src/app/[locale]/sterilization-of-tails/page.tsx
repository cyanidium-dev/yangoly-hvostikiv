import Button from "@/shared/components/Button/Button";
import { PageParams } from "@/shared/types";
import { getDictionary } from "@/shared/utils";
import Image from "next/image";

export default async function SterilizationPage({ params }: PageParams) {
  const { locale } = await params;
  const { sterilization } = await getDictionary(locale);
  return (
    <section className="mt-[65px] mx-auto xl:mt-[140px] container py-8 px-4">
      <div className="bg-white xl:flex xl:p-0">
        <h2 className="text-[24px] pt-5 xl:pt-0 xl:hidden text-center xl:text-left xl:text-[32px] text-black leading-[130%] mb-6">
          {sterilization.title}
        </h2>
        <div className="relative w-full xl:w-[43%] aspect-[361/280] xl:aspect-[610/583] xl:h-auto">
          <Image
            src="/images/sterilization.jpg"
            alt="Foundation Owner"
            fill
            className="object-cover xl:h-full"
            sizes="(max-width: 1280px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="xl:w-[57%] xl:pl-8 xl:pr-4 xl:py-5 xl:flex xl:flex-col justify-center ">
          <h2 className="hidden xl:block text-[24px] text-center xl:text-left xl:text-[32px] text-black leading-[130%] mb-6">
            {sterilization.title}
          </h2>
          <div className="space-y-6 p-5 xl:p-0">
            {sterilization.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-black text-[18px] leading-[130%]">
                {paragraph.segments?.map((segment, segIndex) => (
                  <span
                    key={segIndex}
                    className={segment.bold ? "font-bold" : "font-normal"}
                  >
                    {segment.text}
                  </span>
                ))}
              </p>
            ))}
            <div className="flex flex-col gap-4 xl:flex-row">
              <Button text="Підтримати" />
              <Button variant="outline" text="Потребують стерелізацію" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
