"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "@/shared/utils";
import { IFilterOption, Locale } from "@/shared/types";

export default function Filter({ selectedFilter }: { selectedFilter: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const lang = pathname.split("/")[1] as Locale;
  const [filterOptions, setFilterOptions] = useState<IFilterOption[]>([]);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const { filters } = await getDictionary(lang);
        setFilterOptions([
          { label: filters.allTails, value: "all" },
          { label: filters.needsSterilization, value: "needs-sterilization" },
          { label: filters.needsFamily, value: "needs-family" },
          { label: filters.adopted, value: "adopted" },
        ]);
      } catch (error) {
        console.error("Error fetching filter translations:", error);
      }
    };

    fetchTranslations();
  }, [lang]);

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", value);
    params.set("page", "1");
    router.push(`/${lang}/tails?${params.toString()}`);
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
