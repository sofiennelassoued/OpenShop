import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./index.styles";

const Item = ({ icon, label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.root}>
      <MaterialCommunityIcons name={icon} color="gray" size={20} />
      <View style={{ marginVertical: 4 }} />
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default Item;
