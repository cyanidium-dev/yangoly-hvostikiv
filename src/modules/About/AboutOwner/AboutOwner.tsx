import InfoBlock from "@/shared/components/InfoBlock/InfoBlock";
import { IAboutOwnerTranslation } from "@/shared/types";
import Image from "next/image";

const AboutOwner = ({
  translation,
}: {
  translation: IAboutOwnerTranslation;
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 items-start xl:items-center xl:bg-white xl:rounded-r-[32px]">
      <div className="w-full xl:w-1/2">
        <InfoBlock className="xl:pr-10 xl:pl-5" translation={translation} />
      </div>

      <div className="w-full xl:w-1/2">
        <div className="relative w-full aspect-[355/344] xl:aspect-[722/689]">
          <Image
            src="/images/owner.jpg"
            alt="Foundation Owner"
            fill
            className="object-cover rounded-br-[32px] xl:rounded-r-[32px]"
            sizes="(max-width: 1280px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutOwner;
