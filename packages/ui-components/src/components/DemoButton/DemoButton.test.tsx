import React from "react";
import { render, screen } from "@testing-library/react";
import { DemoButton } from "./DemoButton";

describe("DemoButton", () => {
  it("should render the button", () => {
    render(<DemoButton>test</DemoButton>);
    expect(screen.getByRole("button", { name: "test" }));
  });
});
