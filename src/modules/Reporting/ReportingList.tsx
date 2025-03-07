"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import { ArrowDonwIcon } from "../../../public/images/icons";
import { reportingList } from "@/app/[locale]/reporting/constants";
import { IReportingListProps } from "@/shared/types";

export default function ReportingList({ lang }: IReportingListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1", 10)
  );

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  const totalPages = Math.ceil(reportingList[lang].length / itemsPerPage);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  const currentItems = reportingList[lang].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <ul className="flex flex-col gap-y-6">
        {currentItems.map((item, idx) => (
          <li
            key={idx}
            className="py-[22px] px-[26px] rounded-[32px] bg-white text-[20px] lg:text-[24px] leading-[120%]"
          >
            <Link
              href={`/reporting/${item.id}`}
              className="group flex items-center justify-between w-full"
            >
              <span
                className="transition-colors duration-300 group-[focus-visible]:text-gray/60
                             xl:group-hover:text-gray/60"
              >
                {item.date}
              </span>
              <ArrowDonwIcon
                className="rotate-[270deg] w-6 h-6 transition-colors duration-300 group-[focus-visible]:text-gray/60
                             xl:group-hover:text-gray/60"
              />
            </Link>
          </li>
        ))}
      </ul>
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
