import Link from "next/link";
import TailInfo from "@/shared/components/TailInfo/TailInfo";
import RandomTailCards from "@/shared/components/RandomTailCards/RandomTailCards";
import { ArrowDonwIcon } from "../../../public/images/icons";
import { ITailProps } from "@/shared/types";

export default function Tail({
  tail,
  locale,
  randomTails,
  translation,
}: ITailProps) {
  const { allTails } = translation;

  return (
    <section>
      <div className="mt-[65px] mx-auto xl:mt-[140px] container pt-8 pb-5 px-4 xl:px-10">
        <TailInfo tail={tail} locale={locale} translation={translation} />
      </div>

      <div className="pt-10">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="mt-8">
            <Link
              className="group flex justify-center lg:justify-between items-center font-arial font-black uppercase text-[24px] lg:text-[32px] 
              leading-[130%] transition-colors duration-300 focus-visible:text-gray/60 xl:hover:text-gray/60"
              href="/tails"
            >
              <h2 className="text-dark">{allTails}</h2>
              <ArrowDonwIcon
                className="hidden lg:block rotate-[270deg] w-6 h-6 transition-colors duration-300 group-[focus-visible]:text-primary-gray
               xl:group-hover:text-primary-gray"
              />
            </Link>
            <RandomTailCards tails={randomTails} translation={translation} />
          </div>
        </div>
      </div>
    </section>
  );
}
