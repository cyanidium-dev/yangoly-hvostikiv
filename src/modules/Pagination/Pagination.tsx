"use client";

import { ArrowDonwIcon } from "../../../public/images/icons";

export default function Pagination({
  currentPage,
  totalPages,
  maxVisiblePages = 3,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
  onPageChange: (page: number) => void;
}) {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    if (endPage - startPage < maxVisiblePages - 1) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="inline-flex  justify-center items-center gap-[1px] rounded-[4px] border border-[#DDD] bg-[#DDD]">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-[15px] py-2 h-[38px] text-[18px] text-[#FF9332] bg-white no-ligatures font-sans-pro font-[600] leading-[144%] ${
            page === currentPage ? "bg-[#FF9332] text-white" : "bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`flex justify-center gap-[2px] items-center px-[15px] py-2 h-[38px] bg-white leading-[144%] text-[#FF9332] text-[18px] ${
          currentPage === totalPages ? "opacity-50" : "bg-gray-200"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Далі
        <ArrowDonwIcon className="rotate-[270deg] w-4 h-4" color="#FF9332" />
      </button>
    </div>
  );
}
