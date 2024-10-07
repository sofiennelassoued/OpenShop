import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CarouselComponent from "./components/CarouselComponent";
import products from "../../data/data";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        {/* Replace this with your app logo */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, fontWeight: 800, color: "#FF5722" }}>
            Smilio
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* Account Button */}
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-circle-outline"
              style={styles.iconButton}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {/* Favorites Button */}
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              style={styles.iconButton}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {/* Cart Button */}
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cart-outline"
              style={styles.iconButton}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.SearchBar}>
        <TextInput placeholder="Search for a product.." style={{ flex: 1 }} />
        <TouchableOpacity
          style={{ flex: 0 }}
          onPress={() => navigation.navigate("DiscoverScreen")}
        >
          <Feather name="search" size={24} color="grey" />
        </TouchableOpacity>
      </View>

      {/* Banners Carousel */}
      <CarouselComponent />

      {/* Best Sellers Section */}
      <View style={styles.bestSellersContainer}>
        <View style={styles.bestSellersTitleContainer}>
          <Text style={styles.h2}>Best Offers</Text>
          <Feather name="list" size={24} color="black" />
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "row",
                marginTop: 20,
                width: 180,
                marginRight: 4,
              }}
              onPress={() => navigation.navigate("DetailsScreen")}
            >
              <View>
                {/* Product thumbnail */}
                <Image
                  style={styles.thumbnail}
                  source={{ uri: item.thumbnail }}
                />
                {/* Product title */}
                <View
                  style={{
                    marginTop: 6,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 12 }}
                  >
                    {item.establishement}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Feather name="map-pin" size={10} color="grey" />
                    <View style={{ width: 2 }} />
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{ fontSize: 10, color: "#757575" }}
                    >
                      {item.city}
                    </Text>
                  </View>
                </View>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ fontSize: 15, fontWeight: "600" }}
                >
                  {item.title}
                </Text>
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
                        ${item.price}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "800",
                          color: "#4CAF50",
                          marginRight: 2,
                        }}
                      >
                        ${item.discounted}
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
                          {Math.round(
                            100 - (item.discounted / item.price) * 100
                          )}
                          %
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
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "800",
                        color: "white",
                        marginRight: 3,
                      }}
                    >
                      {item.points}
                    </Text>
                    <Feather name="smile" size={14} color="white" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  iconButton: {
    marginStart: 8,
  },
  SearchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e7e7e7",
    marginTop: 15,
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginHorizontal: 8,
    marginBottom: 15,
  },
  bestSellersContainer: {
    flexDirection: "column",
    marginTop: 50,
    padding: 12,
    paddingRight: 0,
  },
  bestSellersTitleContainer: {
    paddingRight: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h2: {
    fontSize: 20,
    fontWeight: "600",
  },
  thumbnail: {
    borderRadius: 16,
    width: 180,
    height: 155,
    resizeMode: "cover",
    borderRadius: 12,
  },
});

export default HomeScreen;
