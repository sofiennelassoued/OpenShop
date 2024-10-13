import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Carousel from "./carousel";
import styles from "./index.styles";
import ObtainButton from "./obtain";

const DetailsScreen = ({ navigation }) => {
  const handleOnPressObtain = () => {
    navigation.navigate("MyCartScreen");
  };
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
          <Feather name="heart" color="gray" size={24} />
        </View>
      </View>
      <Carousel />
      <View
        style={{
          marginTop: 56,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 64,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                backgroundColor: "#212121",
                borderRadius: 32,
                paddingVertical: 16,
                width: "80%",
                textAlign: "center",
                color: "white",
              }}
            >
              About
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 64,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
              }}
            >
              Details
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 64,
            }}
          >
            <Text style={{ fontWeight: "700" }}>Reviews</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name="map-pin" size={16} color="grey" />
            <Text style={{ fontWeight: "500", fontSize: 16, color: "#757575" }}>
              Akouda
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name="star" size={16} color="orange" />
            <Text
              style={{
                fontWeight: "800",
                fontSize: 16,
                color: "#757575",
                marginRight: 2,
              }}
            >
              4.5
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "#757575" }}>
              (22 reviews)
            </Text>
          </View>
        </View>
        <ScrollView>
          <Text style={{ fontWeight: "700", fontSize: 24 }}>
            Pizza quattro formaggi
          </Text>
          <View
            style={{
              backgroundColor: "#BDBDBD88",
              height: 1,
              marginVertical: 8,
            }}
          />
          <Text>
            Thinking about what to have for dinner? Try out the thin-crust pizza
            with two toppings or use the value voucher for any menu item. It's
            all about enjoying delicious pizzas and more! The Italian dishes are
            hard to resist, but keep in mind some restrictions like no
            repurchases or delivery options. Make your way to Lincoln Park and
            taste the classic flavors that everyone loves.
          </Text>
          <View
            style={{
              backgroundColor: "#BDBDBD88",
              height: 1,
              marginVertical: 8,
            }}
          />
          <Text style={{ fontWeight: "700", fontSize: 18 }}>
            What we offer?
          </Text>
          <Text>
            The offer includes options like a $20 voucher applicable to any menu
            item or delicious thin-crust pizzas in two sizes. Customers can
            choose between a 16-inch or an 18-inch pizza, each featuring two
            favorite toppings. Each option offers a unique way to enjoy classic
            Italian cuisine. $20 Towards Food and Drinks: Use this value towards
            anything on the menu 16 Thin Crust 2-Topping Pizza: Enjoy a tasty
            pizza with your choice of two toppings 18 Thin Crust 2-Topping
            Pizza: Opt for a slightly larger version with your preferred
            toppings
          </Text>
        </ScrollView>
      </View>
      <ObtainButton onPress={handleOnPressObtain} />
    </View>
  );
};

export default DetailsScreen;
