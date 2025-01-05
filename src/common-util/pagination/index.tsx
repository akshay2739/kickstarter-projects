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

  return (
    <PaginationWrapper>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageNumber
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PageNumber>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <JumpInput
        type="number"
        placeholder="Jump to page"
        value={jumpPage}
        onChange={handleJumpChange}
        onKeyDown={handleJumpKeyDown}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
