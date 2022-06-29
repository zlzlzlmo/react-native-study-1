import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
}

const GoalInput = ({ onAddGoal }: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="목표를 입력하세요"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="목표 추가!" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // 기본적으로 alignItems는 stretch가 적용되어 수직 가운데로 하기 위해선 center를 넣어줘야함
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 8,
  },
});
