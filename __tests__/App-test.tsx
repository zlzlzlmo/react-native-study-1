import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react-native";

describe("<App/>", () => {
  describe("rendering", () => {
    test("render input", () => {
      render(<App />);
      expect(screen.getByPlaceholderText("목표를 입력하세요")).toBeDefined();
    });
    test("render button", () => {
      render(<App />);
      expect(screen.getByRole("button")).toBeDefined();
    });

    test("render initial list box", () => {
      render(<App />);
      expect(screen.getByText("목표를 먼저 입력하세요")).toBeDefined();
    });
  });
});
