"use client";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

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
    <div className="inline-flex justify-center items-center gap-[1px] rounded-[4px] border border-[#DDD] bg-[#DDD]">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-[15px] py-2 h-[38px] text-[18px] font-sans-pro font-[600] leading-[144%] transition-colors 
            ${
              page === currentPage
                ? "bg-[#fc8f31] text-white hover:bg-opacity-80"
                : "bg-white text-[#FF9332] hover:bg-[#fc8f31] hover:text-white"
            }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`flex justify-center gap-[2px] items-center px-[15px] py-2 h-[38px] text-[18px] leading-[144%] transition-opacity 
          ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "bg-white text-[#FF9332] hover:bg-opacity-80"
          }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {lang === "uk" ? "Далі" : "Next"}
        <ArrowDonwIcon className="rotate-[270deg] w-4 h-4" color="#FF9332" />
      </button>
    </div>
  );
}
