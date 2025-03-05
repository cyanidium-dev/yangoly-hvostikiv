"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import TailCard from "@/shared/components/TailCard/TailCard";
import Filter from "@/modules/Filter/Filter";
import Pagination from "@/modules/Pagination/Pagination";
import { useItemsPerPage } from "@/shared/hooks/useItemsPerPage";
import { tails } from "@/app/[locale]/tails/constans";
import { ITailsProps } from "@/shared/types";

export default function Tails({ translation }: ITailsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter") || "all");
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    setFilter(searchParams.get("filter") || "all");
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  const filteredTails =
    filter === "all"
      ? tails
      : tails.filter((tail) => tail.categories.includes(filter));

  const totalPages = Math.ceil(filteredTails.length / itemsPerPage);
  const currentItems = filteredTails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  return (
    <section className="mt-[65px] mx-auto xl:mt-[140px] container pt-[60px] lg:pt-8 pb-[100px] lg:pb-[148px] px-4 xl:px-10">
      <Filter selectedFilter={filter} />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {currentItems.map((tail, index) => (
          <li key={index}>
            <TailCard tail={tail} translation={translation} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8 lg:mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
