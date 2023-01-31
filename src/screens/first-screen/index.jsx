/* eslint-disable prettier/prettier */

import { BackHandler, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const FirstScreen = ({onHandleClickStart}) => {

  const onHandleClickStartGame = () => {
    onHandleClickStart("yes");
  };

  return (
    <ImageBackground
      source={require("../../../assets/image/guessthenumber.png")}
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onHandleClickStartGame} style={styles.roundButtonStart}>
            <Text style={styles.text}>START</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => BackHandler.exitApp()} style={styles.roundButtonClose}>
            <Text style={styles.text}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FirstScreen;
