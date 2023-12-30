import React from "react";
import { render, screen } from "@testing-library/react";

describe("example test", () => {
  it("should render the test button", () => {
    render(<button type="button">test</button>);

    const element = screen.getByRole("button", { name: "test" });

    expect(element).toBeVisible();
  });
});
