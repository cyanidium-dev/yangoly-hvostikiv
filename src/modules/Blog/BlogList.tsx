import React from "react";
import { newsList } from "@/app/[locale]/blog/constants";
import BlogCard from "./BlogCard";
import { IBlogListProps } from "@/shared/types";

export default function BlogList({ lang }: IBlogListProps) {
  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 tabxl:grid-cols-3 laptop:grid-cols-4 gap-5 xl:gap-x-5 xl:gap-y-8 justify-items-center">
        {newsList[lang].map((blogItem) => (
          <BlogCard key={blogItem.id} blogItem={blogItem} />
        ))}
      </ul>
    </div>
  );
}
