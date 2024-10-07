import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { AppState, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  // Hide bottom bar
  const hideNavBar = async () => {
    // Hide bottom bar
    await NavigationBar.setPositionAsync("absolute");
    await NavigationBar.setVisibilityAsync("hidden");
    await NavigationBar.setBehaviorAsync("overlay-swipe");
  };

  useEffect(() => {
    hideNavBar();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
