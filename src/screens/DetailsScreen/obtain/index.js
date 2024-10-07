import { View, Text } from "react-native";
import React from "react";
import styles from "./index.styles";
import { Feather } from "@expo/vector-icons";

const ObtainButton = () => {
  return (
    <View style={styles.root}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 3,
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
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                color: "#757575",
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                marginRight: 4,
              }}
            >
              $20
            </Text>
            <Text
              style={{
                fontWeight: "800",
                color: "#4CAF50",
                marginRight: 2,
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
            marginRight: 6
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              color: "white",
              marginRight: 3,
            }}
          >
            120
          </Text>
          <Feather name="smile" size={14} color="white" />
        </View>
      </View>
    </View>
  );
};

export default ObtainButton;
