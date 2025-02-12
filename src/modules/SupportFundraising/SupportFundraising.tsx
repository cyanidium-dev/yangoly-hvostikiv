"use client";
import React from "react";
import Card from "@/shared/components/Card/Card";
import { Locale } from "@/shared/types";

const translations = {
  uk: {
    title: "Підтримати благодійні збори",
    cardTitles: ["Актуальний збір", "Разова допомога", "Стерилізація"],
    goal: "Ціль",
    currency: "грн",
    buttonText: "Підтримати",
    image: "/images/card-image.jpg",
  },
  en: {
    title: "Support Charity Fundraising",
    cardTitles: ["Current Fundraising", "One-Time Help", "Sterilization"],
    goal: "Goal",
    currency: "UAH",
    buttonText: "Support",
    image: "/images/card-image.jpg",
  },
};

const SupportFundraising = ({ lang }: { lang: Locale }) => {
  const t = translations[lang] || translations.uk;

  const handleCardClick = (title: string) => {
    console.log("Card clicked:", title);
  };

  return (
    <section className="container mx-auto px-4 pt-[80px] xl:px-10">
      <h2 className="text-black text-[24px] xl:text-[32px] leading-[130%] text-center mb-8">
        {t.title}
      </h2>
      <ul className="flex flex-col gap-5 md:flex-row md:justify-between">
        {t.cardTitles.map((title, index) => (
          <li className="md:w-[32%]" key={index}>
            <Card
              withProgressBar={true}
              title={title}
              goal={t.goal}
              currency={t.currency}
              currentAmount={(index + 1) * 3000}
              totalAmount={(index + 1) * 10000}
              buttonText={t.buttonText}
              image={t.image}
              onClick={() => handleCardClick(title)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(SupportFundraising);
