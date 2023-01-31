import {
  Alert,
  Button,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useState } from "react";

import { colors } from "../../constants";
import { styles } from "./styles";

export const StartGame = ({ onHandleStarGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [seletedNumber, setSelectedNumber] = useState(null);

  const onHandlerChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const onHandleReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const onHandleConfirm = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "The number must be between 1 and 99", [
        { text: "Understood", style: "destructive", onPress: onHandleReset },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue("");
    }
  };

  const onHandleStartGame = () => {
    onHandleStarGame(seletedNumber);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Numero seleccionado</Text>
        <NumberContainer number={seletedNumber} />
        <Button title="Iniciar juego" onPress={onHandleStartGame} color={colors.primary} />
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Start game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Write a number</Text>
          <TextInput
            value={enteredValue}
            keyboardType="numeric"
            style={styles.input}
            placeholder="0"
            onChangeText={onHandlerChange}
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button title="Restart" onPress={onHandleReset} color={colors.secondary} />
            <Button title="Confirm" onPress={onHandleConfirm} color={colors.primary} />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
