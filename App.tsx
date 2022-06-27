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
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 30 }}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} />
          <Button title="클릭" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 8,
  },
});
