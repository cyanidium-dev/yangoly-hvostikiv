"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../../Button/Button";
import DonateModal from "../../DonateModal/DonateModal";
import { ITailInfoProps } from "@/shared/types";

const TailInfoMobile = ({ tail, locale }: ITailInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Button
          className="mt-2 w-full"
          text={locale === "en" ? "Support" : "Підтримати"}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <DonateModal
        lang={locale}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default TailInfoMobile;
