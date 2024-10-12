import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./index.styles";

const ValidateButton = ({ onPress }) => (
  <TouchableOpacity style={styles.root} onPress={onPress}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialCommunityIcons name="qrcode-scan" size={18} color="white" />
      <Text
        style={{
          fontWeight: "800",
          color: "white",
          marginHorizontal: 8,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
        }}
      >
        Validate deal
      </Text>
    </View>
  </TouchableOpacity>
);
export default ValidateButton;
