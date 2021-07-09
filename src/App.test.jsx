import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
  it("Should render App component", () => {
    render(<App />);
  });
});
