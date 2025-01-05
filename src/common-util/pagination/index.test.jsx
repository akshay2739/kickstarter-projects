import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./index";

describe("Pagination", () => {
  const onPageChange = jest.fn();

  const renderComponent = (props = {}) => {
    return render(
      <Pagination
        totalPages={5}
        currentPage={1}
        onPageChange={onPageChange}
        {...props}
      />
    );
  };

  test("renders pagination buttons", () => {
    renderComponent();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("calls onPageChange when a page button is clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test("disables previous button on first page", () => {
    renderComponent();

    expect(screen.getByText("Previous")).toBeDisabled();
  });

  test("disables next button on last page", () => {
    renderComponent({ currentPage: 5 });

    expect(screen.getByText("Next")).toBeDisabled();
  });

  test("handles jump input change", () => {
    renderComponent();

    const jumpInput = screen.getByPlaceholderText("Jump to page");
    fireEvent.change(jumpInput, { target: { value: "3" } });
    expect(jumpInput).toHaveValue(3);
  });

  test("calls onPageChange when jump input is valid", () => {
    renderComponent();

    const jumpInput = screen.getByPlaceholderText("Jump to page");
    fireEvent.change(jumpInput, { target: { value: "3" } });
    fireEvent.keyDown(jumpInput, { key: "Enter", code: "Enter" });
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  test("does not call onPageChange when jump input is invalid", () => {
    renderComponent();

    const jumpInput = screen.getByPlaceholderText("Jump to page");
    fireEvent.change(jumpInput, { target: { value: "6" } });
    fireEvent.keyDown(jumpInput, { key: "Enter", code: "Enter" });
    expect(onPageChange).not.toHaveBeenCalled();
  });
});