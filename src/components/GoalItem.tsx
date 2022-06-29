import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface GoalItemProps {
  id: string;
  text: string;
  onDeleteGoal: (goalId: string) => void;
}

// * 터치와 같은 interaction을 감지하기 위해 pressable api를 사용한다
// * pressable 은 최근 api 로 touchableOpacity와 같은 api를 대체하여 사용이 가능하다.

const GoalItem = ({ onDeleteGoal, id, text }: GoalItemProps) => {
  return (
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.goalItem} testID="goal-item">
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
