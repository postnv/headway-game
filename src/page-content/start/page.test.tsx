import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Start from "./start";

describe("Start page", () => {
  it("renders without crashing", () => {
    render(<Start />);

    const main = screen.getByText("Who wants to be a millionaire?");
    expect(main).toBeInTheDocument();
  });
});
