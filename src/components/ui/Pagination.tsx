import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center text-base text-[#204BB4] font-medium tracking-[0.5px] leading-none justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex min-h-10 items-center text-[#697077] justify-center p-2"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/fbf6892d5c964fef68365c7749d0ae86785b1cee436d944e522d4b7f5a10968d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0"
          alt="Previous"
        />
        <span className="px-2">Previous</span>
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`min-h-10 px-2 py-3 ${
            currentPage === index + 1
              ? "bg-[rgba(166,200,255,1)] text-[#001D6C]"
              : ""
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex min-h-10 items-center justify-center p-2"
      >
        <span className="px-2">Next</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/a52964998583049a9a8aadc732b6e8bcad839584883a962f15ae1769d0c3f8ab?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0"
          alt="Next"
        />
      </button>
    </div>
  );
};

export default Pagination;
