import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import GoalInput from "./src/components/GoalInput";
import GoalItem from "./src/components/GoalItem";

// SafeAreaView는 아이폰에서 Status Bar 크기 만큼 적용시켜서 padding top같은 역할을 해주는 api
// 안드로이드에는 적용이 안되기 때문에 Platform과 StatusBar.currentHeight를 사용하여 paddingTop적용

// react와 달리 RN에서는 onChangeText (react에서는 onChange )와 onPress (react에서는 onClick ) 이벤트를 사용한다

// 아이폰에서는 Text에 border-radius가 들어가질 않기떄문에 View 컴포넌트로 Text를 감싸고 그 View컴포넌트에다가 border-radius를 줘야한다!!!
// 크로스플랫폼 특성상 일반적으로 아이폰과 안드로이드에서 같은 코드로 똑같이 작용되는 경우가 있지만 가끔씩 다르게 작동되는 부분들이 있다. 그 부분중 하나가 text border-radius이다.

// 브라우저와 달리 RN에서는 height가 넘어갈시 scroll이 안되기 때문에 ScrollView 컴포넌트를 사용해야한다.
// ScrollView는 부모 컴포넌트 스타일 기준에서 스크롤 기능이 적용이 되기 때문에 스타일을 적용한 View로 ScrollView를 감싸야한다.

// ScrollView를 사용했을때 발생할 수 있는 문제점 중 하나가 만약 렌더링할 아이템이 수백 수천개면 성능저하가 일어나게된다.
// 그럴때 FlatList를 사용하면 된다. FlatList는 lazy load 역할을 하게되기때문에 한번에 모든 돔을 렌더링하지 않는다
// FlatList는 data, renderItem prop를 통해 하위 컴포넌트들을 렌더링할 수 있다.
// 또한 data안에 기본적으로 key 프로퍼티를 유니크 값으로 설정하게 되며 만약 key 프로퍼티가 아닌 다른 네임 프로퍼티를 유니크한 아이템으로 설정하고 싶으면 keyExtractor 를 사용하여 원하는 유니크 프로퍼티를 리턴해준다.

interface IGoal {
  text: string;
  id: string;
}

export default function App() {
  const [goals, setGoals] = useState<IGoal[]>([]);

  const onAddGoal = (enteredGoalText: string) => {
    setGoals([
      ...goals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const onDeleteGoal = (goalId: string) => {
    const newList = goals.filter(({ id }) => id !== goalId);
    setGoals(newList);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <GoalInput onAddGoal={onAddGoal} />
        <View style={styles.goalsContainer}>
          {goals.length > 0 ? (
            <FlatList
              testID="goal-list"
              data={goals}
              renderItem={(renderItem) => {
                return (
                  <GoalItem
                    id={renderItem.item.id}
                    text={renderItem.item.text}
                    onDeleteGoal={onDeleteGoal}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
              alwaysBounceVertical={false}
            />
          ) : (
            <Text>목표를 먼저 입력하세요</Text>
          )}

          {/* <ScrollView>
            {goals.map((goal, index) => (
              <View style={styles.goalItem} key={index}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView> */}
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

  goalsContainer: {
    flex: 4,
  },
});
