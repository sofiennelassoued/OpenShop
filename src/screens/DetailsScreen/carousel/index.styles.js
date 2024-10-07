import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  carouselImage: {
    borderRadius: 16,
    width: width-24,
    height: 240,
  },
  dotview: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: -30,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: "grey",
    borderRadius: 50,
    marginHorizontal: 2.5,
  },
});
export default styles;
