import Image from "next/image";
import { IPartnersProps } from "@/shared/types";

const partners = [
  {
    src: "/images/partners/pesiki-fest.png",
    alt: "Pesiki Fest Logo",
    width: 70,
  },
  { src: "/images/partners/artzavod.png", alt: "Artzavod Logo", width: 130 },
  { src: "/images/partners/habiohika.png", alt: "Habiohika Logo", width: 527 },
  { src: "/images/partners/practik.png", alt: "Practik Logo", width: 48 },
  { src: "/images/partners/brit.png", alt: "Brit Logo", width: 180 },
];

const Partners = ({ translation, ...props }: IPartnersProps) => {
  const { title } = translation;

  return (
    <section
      {...props}
      className="container mx-auto px-4 pt-[160px] pb-[80px] xl:py-[120px] xl:px-10"
    >
      <h2 className="text-[32px] text-black leading-[130%] text-center mb-8">
        {title}
      </h2>

      <div className="relative flex overflow-x-hidden overflow-y-hidden w-full h-8 xl:h-[60px]">
        <div className="flex space-x-[100px] animate-marquee">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center shrink-0"
              style={{ width: `${partner.width}px` }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={32}
                className="object-contain h-full w-auto"
                priority={index < 5}
              />
            </div>
          ))}
          {partners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center shrink-0"
              style={{ width: `${partner.width}px` }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={32}
                className="object-contain h-full w-auto"
                priority={false}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 flex space-x-[100px] animate-marquee2">
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center shrink-0"
              style={{ width: `${partner.width}px` }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={32}
                className="object-contain h-full w-auto"
                priority={false}
              />
            </div>
          ))}
          {partners.map((partner, index) => (
            <div
              key={`second-duplicate-${index}`}
              className="flex items-center shrink-0"
              style={{ width: `${partner.width}px` }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={32}
                className="object-contain h-full w-auto"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
