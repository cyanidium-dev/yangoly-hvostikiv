import { IBlogProps } from "@/shared/types";
import React from "react";
import BlogList from "./BlogList";

export default async function Blog({ translation, lang }: IBlogProps) {
  const { title } = translation;

  return (
    <section className="mt-[65px] mx-auto xl:mt-[140px] container pt-[60px] xl:pt-8 pb-[100px] xl:pb-[148px] px-4 xl:px-10">
      <h1
        className="mb-8 xl:mb-12 font-arial font-extrabold text-center text-[24px] xl:text-[32px] leading-[31.2px] 
      xl:leading-[41.6px] text-black uppercase"
      >
        {title}
      </h1>
      <BlogList lang={lang} />
    </section>
  );
}
