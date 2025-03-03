import Button from "@/shared/components/Button/Button";
import { IHeroProps } from "@/shared/types";

const Hero = ({ translation }: IHeroProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, subtitle, fundraisingTitle, goal, currency } = translation;
  return (
    <section className="mt-[65px] xl:mt-[105px] hero-bg pt-[381px] pb-[38px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-white font-arial text-[16px] font-black leading-[122%] uppercase">
          Благодійний фонд
        </h2>
        <h1 className="text-white text-center font-arial uppercase mt-[12px] leading-[122%] font-black text-[40px]">
          Янголи Хвостиків
        </h1>
        <p className="text-white mt-[14px] text-center leading-[122%] text-[16px]">
          Ставай Янголом для Хвостиків разом з нами! Допоможи тваринкам відчути
          себе потрібними у цьому світі
        </p>
        <Button
          className="mt-6 bg-[#FF9332] text-white"
          text="Допомогти хвостику"
        />
      </div>
    </section>
  );
};

export default Hero;
