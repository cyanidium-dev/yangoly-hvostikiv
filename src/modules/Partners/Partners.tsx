"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IPartnersProps } from "@/shared/types";

import "swiper/css";

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

const duplicatedPartners = [...partners, ...partners];

const Partners = ({ translation, ...props }: IPartnersProps) => {
  const { title } = translation;

  return (
    <section {...props} className="container mx-auto px-4 py-[80px] xl:px-10">
      <h2 className="text-[32px] text-black leading-[130%] text-center mb-8">
        {title}
      </h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={100}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="w-full h-8 xl:h-[60px]"
      >
        {duplicatedPartners.map((partner, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto h-full flex items-center"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
