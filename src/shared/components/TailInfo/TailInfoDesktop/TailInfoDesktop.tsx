import { ITailInfoProps } from "@/shared/types";
import ImageSlider from "../../ImageSlider/ImageSlider";
import Button from "../../Button/Button";

const TailInfoDesktop = ({ tail, locale }: ITailInfoProps) => {
  return (
    <div className="flex gap-10">
      <ImageSlider images={tail.images} />
      <div className="flex flex-col justify-center">
        <h2 className="text-black text-[32px] leading-[130%]">{tail.name}</h2>
        <div className="flex flex-col gap-4">
          {tail.description.map((descr, index) => (
            <p className="text-black text-[18px] leading-[130%]" key={index}>
              {descr}
            </p>
          ))}
        </div>
        <div className="flex flex-col max-w-[364px] mt-[30px] gap-4">
          <Button
            text={locale === "uk" ? "Взяти в родину" : "Take into the family"}
          />
          <Button variant="outline" text="Стати янголом - опікуном" />
        </div>
      </div>
    </div>
  );
};

export default TailInfoDesktop;
