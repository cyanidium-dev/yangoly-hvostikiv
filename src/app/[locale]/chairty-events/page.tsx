"use client";
import "swiper/css";
import Button from "@/shared/components/Button/Button";
import DonateModal from "@/shared/components/DonateModal/DonateModal";
import Modal from "@/shared/components/Modal/Modal";
import UniversalForm from "@/shared/components/UniversalForm/UniversalForm";
import getContactFormConfig from "@/shared/formsConfigs/contactForm";
import { IChairtyEvents, IContactsTranslation, Locale } from "@/shared/types";
import { getDictionary } from "@/shared/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LargePhotoModal from "@/shared/components/LargePhotoModal/LargePhotoModal";
import EventsSlider from "@/shared/components/EventsSlider/EventsSlider";
import clsx from "clsx";
import Contacts from "@/modules/Contacts/Contacts";
import EventsGrid from "@/shared/components/EventsGrid/EventsGrid";
export default function CharityEventPage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [localTranslation, setLocalTranslation] =
    useState<IChairtyEvents | null>(null);
  const [contactTranslation, setContactTranslation] =
    useState<IContactsTranslation | null>(null);
  const [openPhoto, setOpenPhoto] = useState<string | null>(null);
  const lang = (usePathname().split("/")[1] as Locale) || "en";

  useEffect(() => {
    getDictionary(lang).then(({ chairtyEvents }) =>
      setLocalTranslation(chairtyEvents)
    );
    getDictionary(lang).then(({ contacts }) => setContactTranslation(contacts));
  }, [lang]);
  const contactConfig = getContactFormConfig(lang);

  const handleSubmitPartner = (data: unknown) => {
    console.log("Submited:", data);
  };

  if (!localTranslation || !contactTranslation) return null;
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
  const images = [
    "/images/partners1.jpg",
    "/images/partners2.jpg",
    "/images/partners3.jpg",
    "/images/partners4.jpg",
    "/images/events/last-slide.jpg",
  ];

  const heroImages = [
    "/images/events/hero/img1.jpg",
    "/images/events/hero/img3.jpg",
    "/images/events/hero/img2.jpg",
    "/images/events/hero/img4.jpg",
    "/images/events/hero/img5.jpg",
  ];

  return (
    <section className="bg-orange-bg mt-[65px] xl:mt-[105px]">
      {/* Гіро секція */}
      <div className="container mx-auto px-4 xl:px-[40px] pt-[60px]">
        <div className="xl:hidden">
          <EventsSlider images={images} />
        </div>
        <EventsGrid images={heroImages} />

        <h2 className="text-dark text-[24px] leading-[130%] font-black uppercase font-arial text-center mt-[80px]">
          {localTranslation.title}
        </h2>
      </div>
      {/* 4 абзаци */}
      <div className="container  flex justify-center mx-auto px-4 xl:px-[40px] ">
        <div className="grid  mt-[48px] pb-[100px] xl:pb-[148px] grid-cols-1 md:grid-cols-2 xl:flex xl:gap-[80px] gap-[32px] ">
          {localTranslation.paragraphs.map((paragraph, index) => (
            <p
              className={clsx(
                "text-[18px] text-black leading-[130%] font-light",
                index === 0 && "xl:max-w-[235px] laptop:max-w-full",
                index === 1 && "xl:max-w-[265px] laptop:max-w-full",
                index === 2 && "xl:max-w-[326px] laptop:max-w-full",
                index === 3 && "xl:max-w-[346px] laptop:max-w-full"
              )}
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {/* Переваги заходів */}
      <div className="bg-[#140A01] py-[70px]">
        <div className="container mx-auto px-4 xl:px-[40px] md:flex md:gap-[40px] xl:flex-row-reverse xl:gap-[130px]">
          <Image
            src="/images/events/benefits-mob.jpg"
            alt="Event"
            width={328}
            height={286}
            className="object-cover flex mx-auto rounded-[8px] xl:hidden"
            quality={100}
          />
          <Image
            src="/images/events/benefits-desk.jpg"
            alt="Event"
            width={747}
            height={286}
            className="object-cover hidden  mx-auto rounded-[8px] xl:flex"
            quality={100}
          />
          <div>
            <h2 className="text-[24px] font-arial font-black uppercase text-white mt-[40px] md:mt-0">
              {localTranslation.benefitsTitle}
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {localTranslation.benefitsParagraphs.map((parahraph, index) => (
                <li className="flex gap-4" key={index}>
                  <Image
                    src="/images/paw.marker-mob.png"
                    alt="Paw"
                    width={32}
                    height={32}
                    className="w-8 h-8 "
                  />

                  <p className="text-[18px] text-white leading-[130%]">
                    {parahraph}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Місія заходів */}
      <div className="  relative pt-[58px] xl:pt-[142px] xl:h-[620px] ">
        <div className="container mx-auto px-4 xl:px-[40px] ">
          <h2 className="text-[#FF9332] text-[24px] xl:text-[64px] font-black uppercase leading-[130%] xl:max-w-[622px]">
            {localTranslation.missionTitle}
          </h2>
          <p className="text-black text-[14px] md:text-[18px] leading-[130%] xl:text-[32px]  mt-4  xl:max-w-[622px]">
            {localTranslation.missionParagraph}
          </p>
        </div>
        <Image
          src="/images/events/pets.png"
          alt="Pets"
          width={362}
          height={189}
          className="mt-[58px] ml-auto xl:hidden"
        />
        <Image
          src="/images/events/pets.png"
          alt="Pets"
          width={850}
          height={497}
          className=" absolute right-0 bottom-0 hidden xl:flex"
        />
      </div>
      {/* Секція з кнопками */}
      <div className="bg-green py-[60px] ">
        <div className="container mx-auto px-4 xl:px-[40px] bg-green ">
          <div className="md:flex md:gap-4 md:justify-between xl:flex-row-reverse xl:items-center">
            <div className="md:max-w-[450px] xl:max-w-[585px]">
              <div className="flex flex-col gap-4">
                {localTranslation.botParagraphs.map((paragraph, index) => (
                  <p
                    className="text-[14px] leading-[130%] text-white xl:text-[18px] "
                    key={index}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex flex-col mt-6 gap-2 md:flex-row">
                <Button
                  onClick={() => setIsDonateModalOpen(true)}
                  variant="secondary"
                  text={localTranslation.buttons[0]}
                />
                <Button
                  onClick={() => setIsPartnerModalOpen(true)}
                  className="border-white text-white hover:text-[#34AD5D] hover:bg-white"
                  variant="outline"
                  text={localTranslation.buttons[1]}
                />
              </div>
            </div>
            <Image
              src="/images/events/bot-mob.jpg"
              alt="Event"
              width={328}
              height={248}
              className="flex mx-auto mt-[28px] md:mt-0 rounded-[8px] md:mx-0 xl:hidden "
            />
            <Image
              src="/images/events/bot-desk.jpg"
              alt="Event"
              width={706}
              height={248}
              className="hidden  xl:flex rounded-[8px]"
            />
          </div>
        </div>
      </div>
      {/* Галерея */}
      <div className="container mx-auto py-8 px-4">
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
              renderBullet: (_, className) =>
                `<span class="${className}"></span>`,
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
          <h2 className="text-[24px] font-arial font-black mb-5 leading-[130%] text-[#1D1D1D] text-center mt-10">
            {localTranslation.partnerModalTitle}
          </h2>
          <UniversalForm
            className="p-0"
            onSubmit={handleSubmitPartner}
            {...contactConfig}
          />
        </Modal>
      </div>
      <Contacts lang={lang} translation={contactTranslation} />
    </section>
  );
}
