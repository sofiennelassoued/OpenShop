import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  root: {
    height: 200,
  },
  block: {
    flex: 1,
    flexDirection: "row",
  },
  separator: {
    backgroundColor: "#00000022",
    height: 40,
    width: 2,
    alignSelf: "center"
  },
  line: {
    backgroundColor: "#00000022",
    height: 2,
    width: width * 0.7,
    alignSelf: "center"
  },
});
export default styles;
