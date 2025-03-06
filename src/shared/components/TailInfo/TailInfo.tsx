"use client";
import { ITailInfoProps } from "@/shared/types";
import ImageSlider from "../ImageSlider/ImageSlider";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";

const TailInfo = ({ tail, locale, translation }: ITailInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAngelModalOpen, setIsAngelModalOpen] = useState(false);

  const {
    adoptButton,
    oneTimeHelpButton,
    adoptDescription,
    name,
    connectButton,
  } = translation;

  return (
    <div className="flex flex-col items-center lg:flex-row gap-y-7 lg:gap-y-0 lg:bg-white">
      <ImageSlider images={tail.images} />
      <div className="flex flex-col justify-center w-full max-w-[706px] lg:max-w-full p-6 lg:px-[76px] bg-white rounded-[12px] lg:rounded-none">
        <h2 className="mb-4 lg:mb-5 font-arial font-black text-black text-[24px] lg:text-[32px] leading-[130%]">
          {tail.name}
        </h2>
        <div className="flex flex-col gap-4">
          {tail.description.map((descr, index) => (
            <p
              className="text-[14px] lg:text-[16px] leading-[130%]"
              key={index}
            >
              {descr}
            </p>
          ))}
        </div>
        <div className="flex flex-col mt-7 lg:mt-8 gap-2">
          <Button
            onClick={() => setIsModalOpen(true)}
            text={adoptButton}
            fullWidth
            className="max-w-[404px] lg:w-[313px] mx-auto lg:mx-0"
          />
          <Button
            onClick={() => setIsAngelModalOpen(true)}
            variant="outline"
            text={oneTimeHelpButton}
            fullWidth
            className="max-w-[404px] lg:w-[313px] mx-auto lg:mx-0"
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-center font-arial font-black text-[24px] leading-[130%] text-[#1D1D1D] uppercase mt-[40px]">
          {adoptButton}
        </h2>
        <p className="text-[14px] lg:text-[16px] leading-[144%] mt-[18px] lg:mt-6 text-center">
          {adoptDescription}
        </p>
        <p className="text-[16px] lg:text-[18px] leading-[130%] mt-6">{name}</p>
        <p className="text-[14px] lg:text-[16px] leading-[130%] mt-2 px-[14px] py-[11px] border border-[#A1A1AA] rounded-[4px]">
          +380 93 098 57 78
        </p>
        <a
          href="tel:+380930985778"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Button
            onClick={() => setIsModalOpen(false)}
            className="mt-6 w-full"
            text={connectButton}
          />
        </a>
      </Modal>

      <Modal
        isOpen={isAngelModalOpen}
        onClose={() => setIsAngelModalOpen(false)}
      >
        <h2 className="text-center text-[24px] leading-[130%] text-[#1D1D1D] uppercase mt-[40px]">
          {locale === "uk"
            ? "Стати янголом-опікуном"
            : "Become a guardian - angel"}
        </h2>
        <p className="text-[#1D1D1D] text-[18px] leading-[144%] mt-6">
          {locale === "uk"
            ? "Щоб стати янголом-опікуном, будь ласка, зв’яжіться за цим номером"
            : "To become a guardian angel, please contact at this number"}
        </p>
        <p className="text-[18px] leading-[130%] text-black mt-6 px-[6px] py-3 border border-[#D4D4D4] rounded-[4px]">
          +380 99 200 40 80
        </p>
        <Button
          onClick={() => setIsAngelModalOpen(false)}
          className="mt-6 w-full"
          text={locale === "uk" ? "Зрозуміло" : "Understood"}
        />
      </Modal>
    </div>
  );
};

export default TailInfo;
