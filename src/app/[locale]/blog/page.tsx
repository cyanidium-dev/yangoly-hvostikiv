import Blog from "@/modules/Blog/Blog";
import React from "react";
import { getDictionary } from "@/shared/utils";
import { PageParams } from "@/shared/types";

export default async function BlogPage({ params }: PageParams) {
  const { locale } = await params;
  const { blog } = await getDictionary(locale);

  return (
    <>
      <Blog translation={blog} lang={locale} />
    </>
  );
}
