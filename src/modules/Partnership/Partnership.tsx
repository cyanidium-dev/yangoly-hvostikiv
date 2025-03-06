"use client";
import Image from "next/image";
import Button from "@/shared/components/Button/Button";
import {
  PartnerShipMaskDesktop,
  PartnerShipMaskMobile,
} from "../../../public/images/icons";
import { useCallback, useState } from "react";
import Modal from "@/shared/components/Modal/Modal";
import { IPartnershipProps } from "@/shared/types";
import UniversalForm from "@/shared/components/UniversalForm/UniversalForm";
import getContactFormConfig from "@/shared/formsConfigs/contactForm";

const Partnership = ({ translation, lang }: IPartnershipProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  const { hero, content, modalTitle } = translation;

  const contactConfig = getContactFormConfig(lang);
  const handleSubmit = (data: unknown) => {
    console.log("Submited:", data);
  };

  return (
    <section className="mt-[65px] xl:mt-[140px]">
      <div className="relative flex justify-center">
        <div className="absolute top-[20px] gap-4 flex flex-col items-center justify-center">
          <h2 className="text-center text-[#FCFCFC] text-[24px] leading-[130%]">
            {hero.title}
          </h2>
          <Button
            onClick={handleOpenModal}
            className="bg-white text-[#FF9332] hover:text-white py-3 hover:shadow-lg transition-all duration-300"
            text={hero.button}
          />
        </div>
        <PartnerShipMaskDesktop className="hidden xl:block" />
        <PartnerShipMaskMobile className="xl:hidden max-h-[200px] w-full" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row-reverse xl:mt-[50px]">
          {/* Текстовий блок */}
          <div className="w-full">
            <div className="bg-white px-10 py-5 h-full border-tr-[8px] border-br-[8px] mt-[46px] xl:mt-0">
              <h2 className="text-black text-[24px] leading-[130%] xl:text-[32px]">
                {content.title}
              </h2>
              <p className="mt-5 text-black leading-[130%] text-[18px]">
                {content.description}
              </p>
              <ul className="space-y-4 mt-5">
                {content.sections.map((section, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Image
                      src="/images/paw.marker.png"
                      width={53}
                      height={52}
                      alt="Paws"
                    />
                    <div>
                      <p className="text-[18px] text-black leading-[130%]">
                        {section.title}
                      </p>
                      <ul className="list-none">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="before:content-['-'] text-black before:mr-1 text-[18px] leading-[130%]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center items-center gap-4 mt-5 xl:flex-row">
                <Button
                  onClick={handleOpenModal}
                  className="w-full py-3"
                  text={content.buttons.partner}
                />
                <Button
                  className="w-full py-3"
                  text={content.buttons.documents}
                  variant="outline"
                />
              </div>
            </div>
          </div>
          {/* Галерея */}
          <div className="w-full h-full">
            <div className="grid grid-cols-2 gap-5 mt-10 xl:mt-0">
              {/* Лівий стовпчик */}
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[170/177] xl:aspect-[372/177] h-full">
                  <Image
                    src="/images/partners1.jpg"
                    alt="Photo 1"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative aspect-[170/204] xl:aspect-[372/276] h-full">
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
                <div className="relative aspect-[171/246] xl:aspect-[305/276] h-full">
                  <Image
                    src="/images/partners2.jpg"
                    alt="Photo 2"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative aspect-[170/135] xl:aspect-[305/177] h-full">
                  <Image
                    src="/images/partners4.jpg"
                    alt="Photo 4"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        modalClassName="xl:max-w-[535px]"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <h2 className="text-[24px] font-arial font-black mb-5 leading-[130%] text-[#1D1D1D] text-center mt-10">
          {modalTitle}
        </h2>
        <UniversalForm
          className="p-0"
          onSubmit={handleSubmit}
          {...contactConfig}
        />
      </Modal>
    </section>
  );
};

export default Partnership;
