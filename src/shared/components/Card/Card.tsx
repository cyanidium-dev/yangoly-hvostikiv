import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ICardProps } from "@/shared/types";
import Button from "../Button/Button";

const Card = ({ title, withProgressBar = false, ...props }: ICardProps) => {
  return (
    <div {...props} className="bg-white p-5 rounded-[8px] flex flex-col gap-4">
      <h3 className="text-center text-black text-[24px] leading-[130%]">
        {title}
      </h3>
      <div className="relative w-full aspect-[321/281] rounded-[16px]">
        <Image
          src="/images/card-image.jpg"
          alt="Photo"
          fill
          className="object-cover rounded-[16px]"
          sizes="(max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {withProgressBar && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-black leading-[130%]">Ціль</p>
            <p className="text-black leading-[130%] numeric-font">30000 грн</p>
          </div>
          <ProgressBar totalAmount={30000} currentAmount={10000} />
        </div>
      )}

      <Button text="Підтримати" />
    </div>
  );
};

export default Card;
