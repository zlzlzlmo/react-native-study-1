import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react-native";

test("app", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("목표를 입력하세요")).toBeDefined();
});
