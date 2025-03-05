"use client";
import React from "react";
import { newsList } from "@/app/[locale]/blog/constants";
import BlogCard from "./BlogCard";
import { IBlogListProps } from "@/shared/types";
import Pagination from "../Pagination/Pagination";
import { useSearchParams, useRouter } from "next/navigation";
import { useItemsPerPage } from "@/shared/hooks/useItemsPerPage";
import { useState, useEffect } from "react";

export default function BlogList({ lang }: IBlogListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemsPerPage = useItemsPerPage();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1", 10)
  );

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  const totalPages = Math.ceil(newsList[lang].length / itemsPerPage);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  const currentItems = newsList[lang].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 tabxl:grid-cols-3 laptop:grid-cols-4 gap-5 xl:gap-x-5 xl:gap-y-8 justify-items-center">
          {currentItems.map((blogItem) => (
            <BlogCard key={blogItem.id} blogItem={blogItem} />
          ))}
        </ul>
      </div>
      <div className="w-fit mt-8 lg:mt-12 mx-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
