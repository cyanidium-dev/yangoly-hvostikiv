"use client";
import UniversalForm from "@/shared/components/UniversalForm/UniversalForm";
import getContactFormConfig from "@/shared/formsConfigs/contactForm";
import { IContactsProps } from "@/shared/types";
import {
  ContactsMask,
  ContactsMaskDesktop,
  EmailIcon,
  PhoneIcon,
} from "../../../public/images/icons";
import Image from "next/image";

const Contacts = ({ lang, translation }: IContactsProps) => {
  const contactConfig = getContactFormConfig(lang);
  const { title, subtitle } = translation;
  const handleSubmit = (data: unknown) => {
    console.log(`Submited:`, data);
  };

  return (
    <section id="contacts" className="relative h-[863px] lg:h-[634px] ">
      <ContactsMask className="absolute inset-0 w-full h-[101%] lg:hidden" />
      <ContactsMaskDesktop className="absolute inset-0 w-full h-[101%] hidden lg:block" />
      <div className="container relative z-10 px-4 top-[80px] lg:top-[100px] mx-auto ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col gap-6 lg:max-w-[406px]">
            <h2 className="text-[24px] text-white leading-[130%] uppercase">
              {title}
            </h2>
            <p className="text-[18px] text-white leading-[130%]">{subtitle}</p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+380992004080"
                className="flex items-center gap-2 text-white leading-[130%] text-[24px] "
              >
                <PhoneIcon className="w-6 h-6" /> 38 093 000 00 00
              </a>
              <a
                href="tel:+380992004080"
                className="flex items-center gap-2 text-white leading-[130%] text-[24px] "
              >
                <PhoneIcon className="w-6 h-6" /> 38 093 000 00 00
              </a>
              <a
                href="mailto:email@gmail.com"
                className="flex items-center gap-2 text-white leading-[130%] text-[24px]"
              >
                <EmailIcon className="w-6 h-6" variant="secondary" />
                hvostiki@gmail.com
              </a>
            </div>
          </div>
          <div className="hidden xl:block absolute bottom-0 right-[42%] z-10">
            <Image
              src="/images/cartoon-cat.png"
              alt="Cartoon Cat"
              width={411}
              height={376}
              priority
            />
          </div>
          <div className="mt-5 max-w-[533px]  w-full lg:w-[533px] lg:mt-0">
            <UniversalForm onSubmit={handleSubmit} {...contactConfig} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
