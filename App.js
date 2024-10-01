import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import StartGameScreen from "./StartGameScreen";
import GameScreen from "./GameScreen";

export default function App() {
  const [isStart, setIsStart] = useState(false);
  const [value, setValue] = useState(null);

  const startHandler = (value) => {
    setValue(value);
    setIsStart(true);
  };

  return (
    <View style={styles.rootContainer}>
      {isStart ? <GameScreen value={value} /> : <StartGameScreen onStart={startHandler} />}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
