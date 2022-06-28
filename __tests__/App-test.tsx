import React from "react";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react-native";

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

  describe("event", () => {
    test("have one item from entering one goal", () => {
      render(<App />);
      addGoal("좋은 개발자 되기");
      const goalItems = screen.getAllByTestId("goal-item");
      expect(goalItems).toHaveLength(1);
    });

    test("have two item from entering two goal", () => {
      render(<App />);

      addGoal("좋은 개발자 되기");
      addGoal("영어 공부 열심히 하기");

      const goalItems = screen.getAllByTestId("goal-item");
      expect(goalItems).toHaveLength(2);
    });
  });
});

function addGoal(goal: string) {
  fireEvent.changeText(screen.getByPlaceholderText("목표를 입력하세요"), goal);
  fireEvent.press(screen.getByRole("button"));
}
