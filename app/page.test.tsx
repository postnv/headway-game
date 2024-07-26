import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Homepage", () => {
  it("renders without crashing", () => {
    render(<Home />);

    const main = screen.getByText("Get started by editing");
    expect(main).toBeInTheDocument();
  });
});
