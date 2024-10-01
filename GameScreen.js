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

export default function GameScreen ({value}) {


  return (
    <View style={styles.container}>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
