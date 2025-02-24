"use client";
import Button from "@/shared/components/Button/Button";
import FundraisingGoal from "../FundraisingGoal/FundraisingGoal";
import { IMonthlyGoalSectionProps } from "@/shared/types";
import DonateModal from "@/shared/components/DonateModal/DonateModal";
import React, { useCallback, useState } from "react";

const MonthlyGoalSection = ({
  lang,
  donateModalTranslataion,
}: IMonthlyGoalSectionProps) => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsDonateModalOpen(false);
  }, []);
  return (
    <section className="bg-primary-green py-10 xl:py-0">
      <div className="container flex flex-col px-4 justify-center mx-auto xl:flex-row xl:gap-[90px] xl:pt-[47px]">
        <div className="bg-white p-5 rounded-t-[16px] xl:w-1/2 xl:ml-[50px] xl:rounded-t-[16px] xl:rounded-b-none xl:self-stretch">
          <h2 className="text-center text-[#FF9332] text-[32px] leading-[130%] mb-2">
            {lang === "uk" ? "Наша ціль на місяць" : "Our monthly goal"}
          </h2>
          <FundraisingGoal
            fundraisingTitle={
              lang === "en" ? "Current collection" : "Актуальный збір"
            }
            goal={lang === "en" ? "Goal" : "Ціль"}
            currency={lang === "en" ? "UAH" : "грн"}
            totalAmount={30000}
            currentAmount={10000}
            styles={{
              titleClassName: "text-[#FF9332] ",
              goalClassName: "text-[#000] no-ligatures leading-[170%]",
              currentAmountClassName: "text-[#000] no-ligatures leading-[170%]",
            }}
          />
        </div>
        <div className="bg-white bg-opacity-20 p-5 flex flex-col gap-6 xl:w-1/2 xl:mb-[47px]">
          <p className="numeric-font text-primary-white text-[18px] leading-[130%]">
            У жовтні фонд збирає <span>30000 грн</span> щоб закупити вакцини для
            тварин на прифронтових територіях. Вакцинація котів та собак
            забезпечує захист від серйозних захворювань.
          </p>
          <div>
            <h2 className="numeric-font text-primary-white text-[18px] leading-[130%] font-bold">
              Аргументи на користь вакцинації:
            </h2>
            <ul className="list-disc pl-8">
              <li className="numeric-font text-primary-white text-[18px] leading-[130%]">
                Захист від інфекційних хвороб. Вакцини запобігають розвитку
                небезпечних інфекційних захворювань, таких як сказ, чумка,
                парвовірус та інші, які можуть бути смертельними для тварин.
                Вакцинація попереджає масштабні спалахи інфекцій.
              </li>
              <li className="numeric-font text-primary-white text-[18px] leading-[130%]">
                Безпека для людей. Деякі хвороби, як-от сказ, передаються від
                тварин до людей. Вакцинація тварин знижує ризик зараження людей.
              </li>
              <li className="numeric-font text-primary-white text-[18px] leading-[130%]">
                Довголіття та якість життя. Вакциновані тварини мають більші
                шанси на довге та здорове життя, оскільки їхній імунітет
                підготовлений до боротьби із серйозними хворобами.
              </li>
            </ul>
          </div>
          <p className="numeric-font text-primary-white text-[18px] leading-[130%]">
            Регулярна вакцинація котів і собак – це відповідальний крок для
            людей, який допомагає не лише зберегти здоров&apos;я тварин, але й
            забезпечити безпеку громадян.
          </p>
          <Button
            onClick={() => setIsDonateModalOpen(true)}
            text={lang === "en" ? "Make a donation" : "Зробити донат"}
            variant="secondary"
          />
        </div>
      </div>
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={handleCloseModal}
        translation={donateModalTranslataion}
        lang={lang}
      />
    </section>
  );
};

export default React.memo(MonthlyGoalSection);
