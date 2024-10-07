import React from "react";
import { Text, View } from "react-native";
import Carousel from "./carousel";
import styles from "./index.styles";
import { Feather } from "@expo/vector-icons";

const DetailsScreen = () => {
  return (
    <View style={styles.root}>
      {/* Top Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 48,
        }}
      >
        {/* Back Button */}
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Page Title */}
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Search
          </Text>
        </View>
      </View>
      <Carousel />
    </View>
  );
};

export default DetailsScreen;
