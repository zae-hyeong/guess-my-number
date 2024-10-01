import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(null);

  const resetHandler = (e) => {
    e.preventDefault();
    setValue("");
  };

  const inputChangeHandler = (enteredText) => {
    setValue(parseInt(enteredText));
  };

  const startHandler = () => {
    Alert.alert(value);
    if (value < 0 || value > 100) Alert.alert("The number is out of range!");
    if (value === null) Alert.alert("Input number");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Guess My Number</Text>
      </View>

      <View style={styles.form}>
        <Text>Enter a Number</Text>
        <TextInput
          style={{ textAlign: "center" }}
          placeholder="enter your number between 0 to 100"
          keyboardType="number"
          maxLength={2}
          accessibilityValue={{ min: 0, max: 100 }}
          value={value}
          onChangeText={inputChangeHandler}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={{ ...styles.resetBtn, ...styles.button }}
          onPress={resetHandler}
        >
          <Text>Reset</Text>
        </Pressable>
        <Pressable
          style={{ ...styles.startBtn, ...styles.button }}
          onPress={startHandler}
        >
          <Text>Start!</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    marginTop: 40,
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
  },

  title: {
    borderWidth: 1,
    padding: 20,
    fontSize: 16,
    borderRadius: 10,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 80,
    height: 45,
    margin: 8,
  },

  resetBtn: { backgroundColor: "pink" },
  startBtn: { backgroundColor: "#BFDAF7" },
});
