import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

// SafeAreaView는 아이폰에서 Status Bar 크기 만큼 적용시켜서 padding top같은 역할을 해주는 api
// 안드로이드에는 적용이 안되기 때문에 Platform과 StatusBar.currentHeight를 사용하여 paddingTop적용

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="목표를 입력하세요" />
          <Button title="목표 추가!" />
        </View>
        <View style={styles.goalsContainer}>
          <Text>Golas</Text>
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
});
