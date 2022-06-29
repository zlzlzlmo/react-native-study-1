import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface GoalItemProps {
  text: string;
}

const GoalItem = ({ text }: GoalItemProps) => {
  return (
    <View style={styles.goalItem} testID="goal-item">
      <Text style={styles.goalText}>{text}</Text>
    </View>
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
