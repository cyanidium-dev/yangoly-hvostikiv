"use client";
import UniversalForm from "@/shared/components/UniversalForm/UniversalForm";
import getContactFormConfig from "@/shared/formsConfigs/contactForm";
import { IContactsProps } from "@/shared/types";
import { EmailIcon, PhoneIcon } from "../../../public/images/icons";
import Image from "next/image";

const Contacts = ({ lang, translation }: IContactsProps) => {
  const contactConfig = getContactFormConfig(lang);
  const { title, subtitle } = translation;
  const handleSubmit = (data: unknown) => {
    console.log(`Submited:`, data);
  };

  return (
    <section
      id="contacts"
      className="relative h-[923px] lg:h-[634px] bg-primary-green"
    >
      <div className="container relative z-10 px-4 xl:px-10 top-[124px] lg:top-[113px] mx-auto ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[406px]">
            <h2 className="mb-3 font-arial font-black text-[24px] lg:text-[32px] text-white leading-[130%] uppercase text-center lg:text-left">
              {title}
            </h2>
            <p className="mb-10 lg:mb-12 text-[16px] lg:text-[20px] text-white leading-[130%] text-center lg:text-left">
              {subtitle}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+380992004080"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-2 text-white leading-[130%] text-[20px] lg:text-[24px] font-semibold"
              >
                <PhoneIcon className="w-6 h-6" variant="secondary" /> 38 093 000
                00 00
              </a>
              <a
                href="tel:+380992004080"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-2 text-white leading-[130%] text-[20px] lg:text-[24px] font-semibold"
              >
                <PhoneIcon className="w-6 h-6" variant="secondary" /> 38 093 000
                00 00
              </a>
              <a
                href="mailto:email@gmail.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-2 text-white leading-[130%] text-[20px] lg:text-[24px] font-semibold"
              >
                <EmailIcon className="w-6 h-6" variant="secondary" />
                hvostiki@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-[44px] max-w-[533px] w-full lg:w-[533px] lg:mt-0 mx-auto lg:mx-0">
            <UniversalForm onSubmit={handleSubmit} {...contactConfig} />
          </div>
        </div>
      </div>
      <Image
        src="/images/two-dogs.webp"
        alt="Two dogs"
        width={682}
        height={974}
        priority
        className="hidden xl:block absolute bottom-0 right-[42%] z-10 w-[341px] h-auto"
      />
    </section>
  );
};

export default Contacts;
