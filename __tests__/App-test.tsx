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

  describe("Handle Event", () => {
    test("show visbile modal when to click button", () => {
      render(<App />);
      const goalModal = screen.queryByA11yHint("goal-modal");
      expect(goalModal).toBeNull();

      const addGoalButton = screen.getByText("목표 입력하기!");
      fireEvent.press(addGoalButton);

      const againGoalModal = screen.queryByA11yHint("goal-modal");
      expect(againGoalModal).not.toBeNull();
    });

    // test("have one item from entering one goal", () => {
    //   render(<App />);
    //   addGoal("좋은 개발자 되기");
    //   const goalItems = screen.getAllByTestId("goal-item");
    //   expect(goalItems).toHaveLength(1);
    // });

    // test("have two item from entering two goal", () => {
    //   render(<App />);

    //   addGoal("좋은 개발자 되기");
    //   addGoal("영어 공부 열심히 하기");

    //   const goalItems = screen.getAllByTestId("goal-item");
    //   expect(goalItems).toHaveLength(2);
    // });

    // test("delete a goal from list container when to click an item", () => {
    //   render(<App />);
    //   addGoal("좋은 개발자 되기");
    //   const goalItems = screen.getAllByTestId("goal-item");
    //   expect(goalItems).toHaveLength(1);

    //   clickItemForDelete();
    //   const againGoalItems = screen.queryAllByTestId("goal-item");
    //   expect(againGoalItems).toHaveLength(0);
    // });
  });
});

function addGoal(goal: string) {
  fireEvent.changeText(screen.getByPlaceholderText("목표를 입력하세요"), goal);
  fireEvent.press(screen.getByRole("button"));
}

function clickItemForDelete() {
  fireEvent.press(screen.getByTestId("goal-item"));
}
