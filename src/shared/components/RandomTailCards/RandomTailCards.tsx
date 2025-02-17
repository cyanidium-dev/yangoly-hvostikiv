"use client";
import Link from "next/link";
import Image from "next/image";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { ITailProps } from "@/shared/types";

const RandomTailCards = ({ tails }: { tails: ITailProps[] }) => {
  const windowWidth = useWindowWidth();

  const itemsToShow = windowWidth > 1366 ? 3 : 2;
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6 pb-[120px]">
      {tails.slice(0, itemsToShow).map((randomTail) => (
        <Link
          key={randomTail.id}
          href={`/tails/${randomTail.id}`}
          className="block bg-white rounded-[16px] overflow-hidden transform transition-all duration-300 hover:scale-[102%] hover:shadow-lg"
        >
          <div className="relative w-full aspect-[170/135]">
            <Image
              src={randomTail.image}
              alt={randomTail.name}
              fill
              className="object-cover rounded-t-[16px]"
              sizes="(max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <div className="pt-4 pb-6">
            <h3 className="text-black text-[24px] leading-[130%] text-center">
              {randomTail.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RandomTailCards;
