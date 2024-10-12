import { StyleSheet } from "react-native";
import { ORANGE } from "../../../utils/colors";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    height: 72,
    width: "100%",
    position: "absolute",
    bottom: 12,
    left: 8,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: ORANGE,
    justifyContent: 'center'
  },
});

export default styles;
