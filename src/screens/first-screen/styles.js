/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
    },
    image: {
      width: "100%",
      height: "100%",
      justifyContent: 'center',
    },
    buttonContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    roundButtonStart: {
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: colors.lightGreen,
        marginBottom: 20,
      },
      roundButtonClose: {
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: colors.red,
        marginBottom: 20,
      },
      text: {
        fontSize: 20,
        fontFamily: "Oswald-Bold",
        color: colors.textFirstScreen,
      }
})