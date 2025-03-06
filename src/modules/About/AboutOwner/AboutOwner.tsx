import InfoBlock from "@/shared/components/InfoBlock/InfoBlock";
import { IAboutOwnerTranslation } from "@/shared/types";
import Image from "next/image";

const AboutOwner = ({
  translation,
}: {
  translation: IAboutOwnerTranslation;
}) => {
  return (
    <div className="bg-orange-bg">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-0">
        <InfoBlock
          titleClassName="xl:text-left"
          className="px-[30px] py-[40px] flex flex-col  justify-center rounded-[20px] xl:px-[89px]  xl:py-10"
          translation={translation}
        />
        <Image
          src="/images/owner.jpg"
          alt="Foundation Owner"
          layout="responsive"
          className="object-cover rounded-[20px]"
          width={328}
          height={400}
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default AboutOwner;
