import Image from "next/image";
import { Fragment } from "react";
import ClockIcon from "../../../public/images/icons/ClockIcon";
import { calculateReadingTime } from "@/shared/utils/calculateReadingTime";
import { IBlogArticleProps } from "@/shared/types";

export default function BlogArticle({
  article,
  translation,
}: IBlogArticleProps) {
  const { title, description, mainPhoto, secondaryPhoto, mainPart } = article;
  const { timeToRead } = translation;

  const readingTime = calculateReadingTime(article);

  return (
    <section className="mt-[65px] mx-auto xl:mt-[140px] container pt-[60px] xl:pt-12 pb-[100px] xl:pb-[148px] px-4 xl:px-10">
      <div className="lg:flex items-center justify-between gap-x-[141px] mb-[60px] lg:mb-12">
        <div className="lg:w-[49.3%] mb-[44px] lg:mb-0">
          <h1 className="mb-7 text-[32px] lg:text-[40px] font-bold leading-[130%]">
            {title}
          </h1>
          <p className="mb-7 text-[14px] lg:text-[18px] font-light leading-[130%]">
            {description}
          </p>
          <div className="flex items-center gap-x-3">
            <ClockIcon className="size-5 lg:size-[27px]" />
            <span className="text-[20px] lg:text-[24px] font-bold leading-[130%]">
              {readingTime}
              {timeToRead}
            </span>
          </div>
        </div>
        <Image
          src={mainPhoto}
          alt={title}
          width={756}
          height={1008}
          className="w-full lg:w-[40.8%] max-w-[585px] h-[383px] mx-auto lg:mx-0 object-cover object-center rounded-[18.05px]"
        />
      </div>
      <div className="mb-[60px] lg:mb-[96px] text-[14px] lg:text-[18px] font-light leading-[130%]">
        {mainPart.lists.map((list, idx) => (
          <Fragment key={idx}>
            <h2>{list.title}</h2>
            <ul>
              {list.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Fragment>
        ))}
        <p>{mainPart.text}</p>
      </div>
      <Image
        src={secondaryPhoto}
        alt={title}
        width={2858}
        height={910}
        className="w-full max-w-[585px] lg:max-w-full aspect-[328/189] lg:aspect-[1429/455] mx-auto lg:mx-0 rounded-[18.05px] object-cover object-center"
      />
    </section>
  );
}
