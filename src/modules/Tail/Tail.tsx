import React from "react";
import TailInfoMobile from "@/shared/components/TailInfo/TailInfoMobile/TailInfoMobile";
import TailInfoDesktop from "@/shared/components/TailInfo/TailInfoDesktop/TailInfoDesktop";
import Link from "next/link";
import { ArrowDonwIcon } from "../../../public/images/icons";
import RandomTailCards from "@/shared/components/RandomTailCards/RandomTailCards";
import { ITailProps } from "@/shared/types";

export default function Tail({
  tail,
  locale,
  randomTails,
  translation,
}: ITailProps) {
  return (
    <section className="">
      <div className="mt-[65px] mx-auto xl:mt-[140px] container pt-8 pb-5 px-4 xl:px-10">
        <div className="lg:hidden">
          <TailInfoMobile tail={tail} locale={locale} />
        </div>
        <div className="hidden lg:block">
          <TailInfoDesktop tail={tail} locale={locale} />
        </div>
      </div>

      <div className="pt-10">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="mt-8">
            <Link
              className="flex justify-between items-center font-arial font-black uppercase text-[24px] lg:text-[32px] leading-[130%] text-black transition-colors duration-300 hover:text-primary-orange"
              href="/tails"
            >
              <h2>{locale === "uk" ? "Всі хвостики" : "All tails"}</h2>
              <ArrowDonwIcon className="rotate-[270deg] w-6 h-6 transition-colors duration-300 group-hover:text-primary-orange" />
            </Link>
            <RandomTailCards tails={randomTails} translation={translation} />
          </div>
        </div>
      </div>
    </section>
  );
}
