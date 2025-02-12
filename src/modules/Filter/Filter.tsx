"use client";

import { useRouter, useSearchParams } from "next/navigation";

const filterOptions = [
  { label: "Всі хвостики", value: "all" },
  { label: "Потребують стерилізацію", value: "needs-sterilization" },
  { label: "Потребують сім'ю", value: "needs-family" },
  { label: "Усиновлені", value: "adopted" },
];

export default function Filter({ selectedFilter }: { selectedFilter: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", value);
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-6 mb-6 flex-wrap justify-center">
      {filterOptions.map((filter) => (
        <button
          key={filter.value}
          className={`text-[24px] pb-1 leading-[130%] ${
            selectedFilter === filter.value
              ? "text-[#34AD5D] border-b border-[#34AD5D]"
              : ""
          }`}
          onClick={() => handleFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
