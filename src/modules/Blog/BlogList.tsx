"use client";
import React from "react";
import { newsList } from "@/app/[locale]/blog/constants";
import BlogCard from "./BlogCard";
import { IBlogListProps } from "@/shared/types";

export default function BlogList({ lang }: IBlogListProps) {
  return (
    <ul>
      {newsList[lang].map((blogItem) => (
        <BlogCard key={blogItem.id} blogItem={blogItem} />
      ))}
    </ul>
  );
}
