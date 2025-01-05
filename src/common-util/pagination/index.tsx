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

  const handleJumpSubmit = () => {
    if (
      typeof jumpPage === "number" &&
      jumpPage >= 1 &&
      jumpPage <= totalPages
    ) {
      onPageChange(jumpPage);
    }
  };

  const getPaginationRange = () => {
    const range = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };

  const isJumpPageValid =
    typeof jumpPage === "number" && jumpPage >= 1 && jumpPage <= totalPages;

  return (
    <PaginationWrapper>
      <PageNumber
        active={false}
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </PageNumber>
      {getPaginationRange().map((page) => (
        <PageNumber
          key={page}
          active={currentPage === page}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
      <PageNumber
        active={false}
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </PageNumber>

      <div className="input-wrapper">
        <JumpInput
          type="number"
          min="1"
          max={totalPages.toString()}
          value={jumpPage}
          onChange={handleJumpChange}
          placeholder="Page"
        />
        <PageNumber onClick={handleJumpSubmit} disabled={!isJumpPageValid}>
          Go
        </PageNumber>
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;
