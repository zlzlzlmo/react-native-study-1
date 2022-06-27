import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

// SafeAreaView는 아이폰에서 Status Bar 크기 만큼 적용시켜서 padding top같은 역할을 해주는 api
// 안드로이드에는 적용이 안되기 때문에 Platform과 StatusBar.currentHeight를 사용하여 paddingTop적용

// react와 달리 RN에서는 onChangeText (react에서는 onChange )와 onPress (react에서는 onClick ) 이벤트를 사용한다

// 아이폰에서는 Text에 border-radius가 들어가질 않기떄문에 View 컴포넌트로 Text를 감싸고 그 View컴포넌트에다가 border-radius를 줘야한다!!!
// 크로스플랫폼 특성상 일반적으로 아이폰과 안드로이드에서 같은 코드로 똑같이 작용되는 경우가 있지만 가끔씩 다르게 작동되는 부분들이 있다. 그 부분중 하나가 text border-radius이다.

// 브라우저와 달리 RN에서는 height가 넘어갈시 scroll이 안되기 때문에 ScrollView 컴포넌트를 사용해야한다.
// ScrollView는 부모 컴포넌트 스타일 기준에서 스크롤 기능이 적용이 되기 때문에 스타일을 적용한 View로 ScrollView를 감싸야한다.

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);

  const handleGoalInput = (text: string) => {
    setEnteredGoalText(text);
  };

  const handleAddGoal = () => {
    setGoals([...goals, enteredGoalText]);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="목표를 입력하세요"
            onChangeText={handleGoalInput}
          />
          <Button title="목표 추가!" onPress={handleAddGoal} />
        </View>
        <View style={styles.goalsContainer}>
          <ScrollView>
            {goals.map((goal, index) => (
              <View style={styles.goalItem} key={index}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
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
  goalsContainer: {
    flex: 4,
  },
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
