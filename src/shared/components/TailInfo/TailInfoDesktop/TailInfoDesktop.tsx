"use client";
import { ITailInfoProps } from "@/shared/types";
import ImageSlider from "../../ImageSlider/ImageSlider";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { useState } from "react";

const TailInfoDesktop = ({ tail, locale }: ITailInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAngelModalOpen, setIsAngelModalOpen] = useState(false);
  return (
    <div className="flex  bg-white">
      <ImageSlider images={tail.images} />
      <div className="flex flex-col justify-center px-[76px]">
        <h2 className="mb-5 font-arial font-black text-black text-[32px] leading-[130%]">
          {tail.name}
        </h2>
        <div className="flex flex-col gap-4">
          {tail.description.map((descr, index) => (
            <p className="text-black text-[16px] leading-[130%]" key={index}>
              {descr}
            </p>
          ))}
        </div>
        <div className="flex flex-col max-w-[364px] mt-8 gap-2">
          <Button
            onClick={() => setIsModalOpen(true)}
            text={locale === "uk" ? "Взяти в родину" : "Take into the family"}
          />
          <Button
            onClick={() => setIsAngelModalOpen(true)}
            variant="outline"
            text={
              locale === "uk"
                ? "Стати янголом - опікуном"
                : "Become a guardian - angel"
            }
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-center text-[24px] leading-[130%] text-[#1D1D1D] uppercase mt-[40px]">
          {locale === "uk" ? "ВЗЯТИ В РОДИНУ" : "TAKE INTO THE FAMILY"}
        </h2>
        <p className="text-[#1D1D1D] text-[18px] leading-[144%] mt-6">
          {locale === "uk"
            ? "Щоб взяти в родину хвостика, будь ласка, зв’яжіться з його опікуном за цим номером"
            : "To take the tail into the family, please contact its guardian at this number"}
        </p>
        <p className="text-[18px] leading-[130%] text-black mt-6">Анатолій</p>
        <p className="text-[18px] leading-[130%] text-black mt-6 px-[6px] py-3 border border-[#D4D4D4] rounded-[4px]">
          +380 93 098 57 78
        </p>
        <Button
          onClick={() => setIsModalOpen(false)}
          className="mt-6 w-full"
          text={locale === "uk" ? "Зрозуміло" : "Understood"}
        />
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

export default TailInfoDesktop;
