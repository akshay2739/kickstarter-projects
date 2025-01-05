import { useState } from "react";
import { JumpInput, PageNumber, PaginationWrapper } from "./styles";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [jumpPage, setJumpPage] = useState<number | string>("");

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleJumpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setJumpPage(value === "" ? "" : Number(value));
  };

  const handleJumpKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && typeof jumpPage === "number") {
      handlePageChange(jumpPage);
    }
  };

  const handleJumpSubmit = () => {
    if (
      typeof jumpPage === "number" &&
      jumpPage >= 1 &&
      jumpPage <= totalPages
    ) {
      onPageChange(jumpPage);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    while (pages.length < 5 && pages[0] > 1) {
      pages.unshift(pages[0] - 1);
    }

    while (pages.length < 5 && pages[pages.length - 1] < totalPages) {
      pages.push(pages[pages.length - 1] + 1);
    }

    return pages;
  };

  const isJumpPageValid =
    typeof jumpPage === "number" && jumpPage >= 1 && jumpPage <= totalPages;

  return (
    <PaginationWrapper>
      <PageNumber
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PageNumber>
      {getPageNumbers().map((page) => (
        <PageNumber
          key={page}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
      <PageNumber
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PageNumber>
      <JumpInput
        type="number"
        placeholder="Jump to page"
        value={jumpPage}
        onChange={handleJumpChange}
        onKeyDown={handleJumpKeyDown}
      />
      <PageNumber onClick={handleJumpSubmit} disabled={!isJumpPageValid}>
        Go
      </PageNumber>
    </PaginationWrapper>
  );
};

export default Pagination;
