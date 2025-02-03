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

const Contacts = ({ lang, translation }: IContactsProps) => {
  const contactConfig = getContactFormConfig(lang);
  const { title, subtitle } = translation;
  const handleSubmit = (data: unknown) => {
    console.log(`Submited:`, data);
  };

  return (
    <section className="relative h-[863px] xl:h-[634px] ">
      <ContactsMask className="absolute inset-0 w-full h-[101%] xl:hidden" />
      <ContactsMaskDesktop className="absolute inset-0 w-full h-[101%] hidden xl:block" />
      <div className="container relative z-10 px-4 top-[80px] xl:top-[100px] mx-auto ">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
          <div className="flex flex-col gap-6">
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
          <div className="mt-5 max-w-[533px] w-full xl:w-[533px] xl:mt-0">
            <UniversalForm onSubmit={handleSubmit} {...contactConfig} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
