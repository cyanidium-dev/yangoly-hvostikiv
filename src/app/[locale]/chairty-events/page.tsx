"use client";
import Button from "@/shared/components/Button/Button";
import DonateModal from "@/shared/components/DonateModal/DonateModal";
import Modal from "@/shared/components/Modal/Modal";
import UniversalForm from "@/shared/components/UniversalForm/UniversalForm";
import getContactFormConfig from "@/shared/formsConfigs/contactForm";
import { IChairtyEvents, Locale } from "@/shared/types";
import { getDictionary } from "@/shared/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import LargePhotoModal from "@/shared/components/LargePhotoModal/LargePhotoModal";
export default function CharityEventPage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [localTranslation, setLocalTranslation] =
    useState<IChairtyEvents | null>(null);
  const [openPhoto, setOpenPhoto] = useState<string | null>(null);
  const lang = (usePathname().split("/")[1] as Locale) || "en";

  useEffect(() => {
    getDictionary(lang).then(({ chairtyEvents }) =>
      setLocalTranslation(chairtyEvents)
    );
  }, [lang]);
  const contactConfig = getContactFormConfig(lang);

  const handleSubmitPartner = (data: unknown) => {
    console.log("Submited:", data);
  };

  if (!localTranslation) return null;
  const slides = [
    "/images/chairty5.jpg",
    "/images/partners1.jpg",
    "/images/partners2.jpg",
    "/images/partners3.jpg",
    "/images/partners4.jpg",
    "/images/partners1.jpg",
    "/images/partners2.jpg",
    "/images/partners3.jpg",
    "/images/partners4.jpg",
    "/images/partners1.jpg",
    "/images/partners2.jpg",
    "/images/partners3.jpg",
    "/images/partners4.jpg",
  ];
  return (
    <section className="mt-[65px] mx-auto xl:mt-[140px] container py-8 px-4">
      <div className="flex gap-5">
        <div className="w-full xl:w-1/2 p-5 bg-white rounded-[8px]">
          <h2 className="text-black text-[32px] leading-[130%]">
            {localTranslation.title}
          </h2>
          {localTranslation.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt-4 text-[18px] leading-[130%] text-black"
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-[18px] leading-[130%] text-black">
            {localTranslation.listTitle}
          </p>
          <ul>
            {localTranslation.listItems.map((item, index) => (
              <li key={index} className="mt-4 flex items-start gap-4">
                <div className="w-[53px] h-[52px] flex-shrink-0">
                  <Image
                    src="/images/paw.marker.png"
                    width={53}
                    height={52}
                    alt="Лапка"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[18px] leading-[130%] text-black flex-1">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col xl:flex-row mt-6 gap-4">
            <Button
              onClick={() => setIsDonateModalOpen(true)}
              text={localTranslation.buttons[0]}
            />
            <Button
              onClick={() => setIsPartnerModalOpen(true)}
              variant="outline"
              text={localTranslation.buttons[1]}
            />
          </div>
        </div>
        <div className="xl:w-1/2 hidden xl:block ">
          <div className="grid grid-cols-2 gap-5 mt-10 xl:mt-0">
            {/* Лівий стовпчик */}
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[170/177] xl:aspect-[349/228] h-full">
                <Image
                  src="/images/partners1.jpg"
                  alt="Photo 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative aspect-[170/204] xl:aspect-[349/225] h-full">
                <Image
                  src="/images/partners3.jpg"
                  alt="Photo 3"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Правий стовпчик */}
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[171/246] xl:aspect-[351/317] h-full">
                <Image
                  src="/images/partners2.jpg"
                  alt="Photo 2"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative aspect-[170/135] xl:aspect-[351/147] h-full">
                <Image
                  src="/images/partners4.jpg"
                  alt="Photo 4"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative mt-6 aspect-[720/336] w-full">
            <Image
              src="/images/chairty5.jpg"
              alt="Photo 5"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <p className="text-[18px] leading-[130%] mt-6 rounded-[8px] text-black flex-1 text-center p-[10px] border border-[#FF9332] bg-white rounded-[8">
            {localTranslation.photoSubtitle}
          </p>
        </div>
      </div>
      <div className="mt-[80px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.1}
          breakpoints={{
            375: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2.1,
            },
            1366: {
              slidesPerView: 4.1,
            },
          }}
          pagination={{
            clickable: true,
            renderBullet: function (_, className) {
              // Використовуємо порожній рядок для _, оскільки нам не потрібен індекс
              return '<span class="' + className + '">1</span>';
            },
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((src: string, index: number) => (
            <SwiperSlide key={index}>
              <div
                className="relative aspect-[343/248] w-full cursor-pointer"
                onClick={() => setOpenPhoto(src)}
              >
                <Image
                  src={src}
                  alt={`Photo ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {openPhoto && (
        <LargePhotoModal
          photoSrc={openPhoto}
          onClose={() => setOpenPhoto(null)}
        />
      )}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        lang={lang}
      />
      <Modal
        modalClassName="xl:max-w-[535px]"
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      >
        <h2 className="text-[24px] leading-[130%] text-[#1D1D1D] text-center mt-10">
          {localTranslation.partnerModalTitle}
        </h2>
        <UniversalForm
          className="p-0"
          onSubmit={handleSubmitPartner}
          {...contactConfig}
        />
      </Modal>
    </section>
  );
}
