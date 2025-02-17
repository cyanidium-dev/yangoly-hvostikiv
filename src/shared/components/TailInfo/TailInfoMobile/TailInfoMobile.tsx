"use client";
import Image from "next/image";
import Button from "../../Button/Button";
import { ITailInfoProps } from "@/shared/types";
import Modal from "../../Modal/Modal";
import { useState } from "react";

const TailInfoMobile = ({ tail, locale }: ITailInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAngelModalOpen, setIsAngelModalOpen] = useState(false);
  return (
    <div>
      <h2 className="text-black text-[24px] leading-[130%]">{tail.name}</h2>
      <div className="relative my-6 w-full h-full aspect-[361/287]  rounded-l-[8px]">
        <Image
          src={tail.image}
          alt={tail.name}
          fill
          className="w-full h-56 object-cover absolute inset-0 rounded-l-[8px]"
        />
      </div>
      <div className="py-5 ">
        <div className="flex flex-col gap-4">
          {tail.description.map((description, index) => (
            <p className="text-black text-[18px] leading-[130%]" key={index}>
              {description}
            </p>
          ))}
        </div>
        <div className="flex flex-col mt-2 gap-4 ">
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

export default TailInfoMobile;
