import { IBlogCardProps } from "@/shared/types";
import React from "react";

export default function BlogCard({ blogItem }: IBlogCardProps) {
  const { mainPhoto, date, title, description } = blogItem;

  return <li className="bg-[#FCFCFC]">BlogCard</li>;
}
