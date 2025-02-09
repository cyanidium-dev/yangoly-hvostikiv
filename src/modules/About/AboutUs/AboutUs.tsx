import ImageGallery from "@/shared/components/ImageGallery/ImageGallery";
import InfoBlock from "@/shared/components/InfoBlock/InfoBlock";
import { IInformationBlockTranslation } from "@/shared/types";
import Link from "next/link";

const aboutImages = [
  {
    src: "/images/about1.jpg",
    alt: "Owner with pets showing foundation logo",
  },
  {
    src: "/images/about2.jpg",
    alt: "Pet drawing with paw",
  },
  {
    src: "/images/about3.jpg",
    alt: "Team members with pets",
  },
];
const AboutUs = ({
  translation,
}: {
  translation: IInformationBlockTranslation;
}) => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-center xl:items-center xl:bg-white gap-6 xl:gap-0 items-start xl:mb-[40px]">
      <div className="w-full xl:w-1/2 order-2 xl:order-1">
        <ImageGallery
          images={aboutImages}
          variant="splitLayout"
          className="xl:bg-primary-gray-100 mb-5 xl:mb-0"
        />
      </div>
      <InfoBlock
        className="w-full xl:w-1/2 order-1 xl:order-2 xl:bg-white xl:px-10 xl:py-10"
        translation={translation}
      >
        <div className="flex flex-col gap-4 xl:flex-row">
          <Link
            className="uppercase px-6 py-3 bg-primary-green text-[18px] leading-[130%] text-[#F8F7F7] text-center rounded-lg transition-colors duration-300 hover:bg-primary-green/90"
            href={translation.links![0].href}
          >
            {translation.links![0].text}
          </Link>
          <Link
            className="uppercase px-6 py-3 bg-white text-[18px] leading-[130%] text-primary-green text-center rounded-lg border border-primary-green transition-colors duration-300 hover:bg-primary-green hover:text-white"
            href={translation.links![1].href}
          >
            {translation.links![1].text}
          </Link>
        </div>
      </InfoBlock>
    </div>
  );
};

export default AboutUs;
