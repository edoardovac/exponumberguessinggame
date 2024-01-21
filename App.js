import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";

export default function App() {
  const [guess, setGuess] = useState();
  const [gameText, setGameText] = useState();
  const [generatedNum, setGeneratedNum] = useState();
  const [count, setCount] = useState(0);

  const startGame = () => {
    setGeneratedNum(Math.floor(Math.random() * 100) + 1);
    setGameText("Guess a number between 1-100");
    setCount(0);
  };

  useEffect(() => {
    startGame();
  }, []);

  const checkGuess = () => {
    if (guess == generatedNum) {
      Alert.alert(`You guessed the number in ${count} guesses`);
      startGame();
    } else if (guess > generatedNum) {
      setGameText(`Your guess ${guess} is too high`);
      setCount(count + 1);
    } else if (guess < generatedNum) {
      setGameText(`Your guess ${guess} is too low`);
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{gameText}</Text>
      </View>
      <View>
        <TextInput
          inputMode="numeric"
          style={{
            width: 50,
            borderColor: "gray",
            borderWidth: 1,
            margin: "5%",
          }}
          onChangeText={(text) => setGuess(text)}
        />
      </View>
      <Button onPress={checkGuess} title="Make Guess"></Button>
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
});
