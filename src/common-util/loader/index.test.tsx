import { render, screen } from "@testing-library/react";
import Loader from "./index";

describe("Loader", () => {
  test("renders the Spinner component", () => {
    render(<Loader />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
