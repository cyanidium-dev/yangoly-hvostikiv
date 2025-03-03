"use client";
import React from "react";
import { newsList } from "@/app/[locale]/blog/constants";
import BlogCard from "./BlogCard";
import { IBlogListProps } from "@/shared/types";

export default function BlogList({ lang }: IBlogListProps) {
  return (
    <ul className="flex flex-col gap-5 xl:gap-x-5 xl:gap-y-8">
      {newsList[lang].map((blogItem) => (
        <BlogCard key={blogItem.id} blogItem={blogItem} />
      ))}
    </ul>
  );
}
