import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./index.styles";
import { Feather } from "@expo/vector-icons";

const ObtainButton = ({ onPress }) => (
  <TouchableOpacity style={styles.root} onPress={onPress}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Price */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              color: "#757575",
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              marginRight: 4,
              fontSize: 20,
            }}
          >
            $20
          </Text>
          <Text
            style={{
              fontWeight: "800",
              color: "#4CAF50",
              marginRight: 2,
              fontSize: 20,
            }}
          >
            $10
          </Text>
          <View
            style={{
              backgroundColor: "#4CAF5044",
              paddingVertical: 1,
              paddingHorizontal: 2,
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "800",
                color: "#4CAF50",
                fontSize: 18,
              }}
            >
              50%
            </Text>
          </View>
        </View>
      </View>
      {/* Ratings */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#FF5722",
          alignItems: "center",
          paddingVertical: 1,
          paddingHorizontal: 6,
          borderRadius: 12,
          flex: 1,
          height: 56,
          borderRadius: 36,
          marginRight: 6,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "800",
            color: "white",
            marginRight: 3,
            fontSize: 24,
          }}
        >
          Get: 120
        </Text>
        <Feather name="smile" size={24} color="white" />
      </View>
    </View>
  </TouchableOpacity>
);
export default ObtainButton;
