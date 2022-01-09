import { StyleSheet } from "react-native";
import { isApple, isPad } from "../utils";
import colors from "./colors";

const rewarded_style = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    marginTop: isApple && !isPad ? 0 : 10,
  },
  paragraph: {
    marginTop: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paragraphText: {
    color: colors.black,
    textAlign: "center",
    fontFamily: "NegativeHarmonyBold",
    fontSize: 24,
    marginVertical: 2,
  },
  start: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    width: "75%",
    height: 70,
    borderRadius: 35,
    marginTop: 60,
    marginBottom: 30,
  },
  disabled: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.disabled,
    width: "75%",
    height: 70,
    borderRadius: 35,
    marginTop: 60,
    marginBottom: 30,
  },
  startText: {
    color: colors.white,
    textAlign: "center",
    fontFamily: "NegativeHarmonyBold",
    fontSize: 20,
  },
  disclamer: {
    color: colors.black,
    textAlign: "center",
    fontFamily: "NegativeHarmonyRegular",
    fontSize: 12,
  },
});

export default rewarded_style;
