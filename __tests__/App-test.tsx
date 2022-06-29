import React from "react";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("<App/>", () => {
  describe("rendering", () => {
    test("render input", () => {
      render(<App />);
      expect(screen.queryByPlaceholderText("목표를 입력하세요")).toBeNull();
    });
    test("render button for adding goal", () => {
      render(<App />);
      expect(screen.getByText("목표 입력하기!")).toBeDefined();
    });

    test("render initial list box", () => {
      render(<App />);
      expect(screen.getByText("목표를 먼저 입력하세요")).toBeDefined();
    });
  });

  describe("Show Modal", () => {
    test("show visbile modal when to click button", () => {
      render(<App />);
      const goalModal = screen.queryByA11yHint("goal-modal");
      expect(goalModal).toBeNull();

      const addGoalButton = screen.getByText("목표 입력하기!");
      fireEvent.press(addGoalButton);

      const againGoalModal = screen.queryByA11yHint("goal-modal");
      expect(againGoalModal).not.toBeNull();
    });
  });

  describe("Handle Event at Modal", () => {
    beforeEach(() => {
      render(<App />);
      const addGoalButton = screen.getByText("목표 입력하기!");
      fireEvent.press(addGoalButton);
    });

    test("have one item from entering one goal", () => {
      addGoal("좋은 개발자 되기");
      const goalItems = screen.getAllByTestId("goal-item");
      expect(goalItems).toHaveLength(1);
    });

    test("close modal after adding a goal", () => {
      addGoal("영어 공부 열심히 하기");
      const goalModal = screen.queryByA11yHint("goal-modal");
      expect(goalModal).toBeNull();
    });

    test("delete a goal when to click an item", () => {
      addGoal("영어 공부 열심히 하기");
      deleteGoal();

      const items = screen.queryAllByTestId("goal-item");
      expect(items).toHaveLength(0);
    });
  });
});

function addGoal(goal: string) {
  fireEvent.changeText(screen.getByPlaceholderText("목표를 입력하세요"), goal);
  fireEvent.press(screen.getByText("목표 추가!"));
}

function deleteGoal() {
  fireEvent.press(screen.getByTestId("goal-item"));
}
