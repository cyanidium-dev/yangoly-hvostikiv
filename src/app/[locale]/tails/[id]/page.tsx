import { PageParams } from "@/shared/types";
import { tails } from "../constans";

import TailInfoMobile from "@/shared/components/TailInfo/TailInfoMobile/TailInfoMobile";
import TailInfoDesktop from "@/shared/components/TailInfo/TailInfoDesktop/TailInfoDesktop";
import Link from "next/link";
import { ArrowDonwIcon } from "../../../../../public/images/icons";
import RandomTailCards from "@/shared/components/RandomTailCards/RandomTailCards";

export default async function TailPage({ params }: PageParams) {
  const { id, locale } = await params;
  const tail = tails.find((tail) => tail.id === id);

  if (!tail) {
    return null
  }

  const otherTails = tails.filter((t) => t.id !== id);
  const randomTails = otherTails.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section className="bg-white xl:bg-[#F8F7F7]">
      <div className="mt-[65px] mx-auto xl:mt-[140px] container pt-8 pb-5 px-4 xl:px-10">
        <div className="lg:hidden">
          <TailInfoMobile tail={tail} locale={locale} />
        </div>
        <div className="hidden lg:block">
          <TailInfoDesktop tail={tail} locale={locale} />
        </div>
      </div>

      <div className="bg-[#F8F7F7] pt-10">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="mt-8">
            <Link
              className="flex justify-between items-center text-[24px] leading-[130%] text-black transition-colors duration-300 hover:text-primary-orange"
              href="/tails"
            >
              <span>{locale === "uk" ? "Всі хвостики" : "All tails"}</span>
              <ArrowDonwIcon className="rotate-[270deg] w-6 h-6 transition-colors duration-300 group-hover:text-primary-orange" />
            </Link>
            <RandomTailCards tails={randomTails} />
          </div>
        </div>
      </div>
    </section>
  );
}
