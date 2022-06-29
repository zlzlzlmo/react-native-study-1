import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
  onCloseModal: () => void;
  isModalVisible: boolean;
}

const GoalInput = ({
  onAddGoal,
  onCloseModal,
  isModalVisible,
}: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    onCloseModal();
  };

  // * RN에서는 기본적으로 Modal api가 제공된다
  // * visible과 animation 속성을 줘 컨트롤이 가능하다.

  return (
    <Modal visible={isModalVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="목표를 입력하세요"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="목표 추가!" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="취소" onPress={onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // 기본적으로 alignItems는 stretch가 적용되어 수직 가운데로 하기 위해선 center를 넣어줘야함
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 10,
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 8,
  },
});
