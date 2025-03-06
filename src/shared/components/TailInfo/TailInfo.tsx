"use client";
import { useState } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Button from "../Button/Button";
import AdoptModal from "../AdoptModal/AdoptModal";
import DonateModal from "../DonateModal/DonateModal";
import { ITailInfoProps } from "@/shared/types";

const TailInfo = ({ tail, locale, translation }: ITailInfoProps) => {
  const [isAdoptModalOpen, setIsAdoptModalOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const { adoptButton, oneTimeHelpButton } = translation;

  const handleAdoptModalClose = () => {
    setIsAdoptModalOpen(false);
  };

  const handleDoanteModalClose = () => {
    setIsDonateModalOpen(false);
  };

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
            onClick={() => setIsAdoptModalOpen(true)}
            text={adoptButton}
            fullWidth
            className="max-w-[404px] lg:w-[313px] mx-auto lg:mx-0"
          />
          <Button
            onClick={() => setIsDonateModalOpen(true)}
            variant="outline"
            text={oneTimeHelpButton}
            fullWidth
            className="max-w-[404px] lg:w-[313px] mx-auto lg:mx-0"
          />
        </div>
      </div>
      <AdoptModal
        isOpen={isAdoptModalOpen}
        onClose={handleAdoptModalClose}
        translation={translation}
      />
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={handleDoanteModalClose}
        lang={locale}
      />
    </div>
  );
};

export default TailInfo;
