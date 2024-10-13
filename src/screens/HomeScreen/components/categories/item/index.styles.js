import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: width / 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8
  },
  label: {
    color: "gray",
    textAlign: 'center'
  },
});
export default styles;
