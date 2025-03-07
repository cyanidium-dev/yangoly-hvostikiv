import { IReportingProps } from "@/shared/types";

export default function Reporting({ translation }: IReportingProps) {
  const { title } = translation;

  return (
    <section className="mt-[65px] mx-auto xl:mt-[140px] container pt-[60px] xl:pt-14 pb-[100px] xl:pb-[148px] px-4 xl:px-10">
      <h1
        className="mb-8 xl:mb-12 font-arial font-black text-center text-[24px] xl:text-[32px] leading-[31.2px] 
      xl:leading-[41.6px] uppercase"
      >
        {title}
      </h1>
    </section>
  );
}
