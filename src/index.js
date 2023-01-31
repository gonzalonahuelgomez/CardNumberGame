/* eslint-disable prettier/prettier */

import { ActivityIndicator, View } from "react-native";
import { FirstScreen, Game, StartGame } from "./screens";

import { Header } from "./components";
import { colors } from "./constants";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { useState } from "react";

const App = () => {
  const [loaded] = useFonts({
    "Oswald-Regular": require("../assets/fonts/Oswald-Regular.ttf"),
    "Oswald-Bold": require("../assets/fonts/Oswald-Bold.ttf"),
    "Oswald-Medium": require("../assets/fonts/Oswald-Medium.ttf"),
    "Oswald-Light": require("../assets/fonts/Oswald-Light.ttf"),
    "Oswald-SemiBold": require("../assets/fonts/Oswald-SemiBold.ttf"),
  });
  const [userNumber, setUserNumber] = useState(null);
  const [start, setStart] = useState(null);

  const onHandleStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onHandleClickStart = (startGame) => {
    setStart(startGame);
  };

  const Content = () =>
    userNumber ? (
      <Game selectedNumber={userNumber} />
    ) : (
      <StartGame onHandleStarGame={onHandleStarGame} />
    );

    const StartOrGame = () =>
    start ? (
    <>
      <Header title="Guess the number" />
      <Content />
    </>
    ) : (
      <FirstScreen onHandleClickStart={onHandleClickStart}/>
    );

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StartOrGame />
    </View>
  );
};

export default App;
