import React from "react";
import { View } from "react-native";
import styles from "./index.styles";
import Item from "./item";

const Categories = () => {
  const onPress = (id) => {
    alert(id);
  };
  return (
    <View style={styles.root}>
      <View style={styles.block}>
        <Item
          icon="food-outline"
          label="Food & Drinks"
          onPress={() => onPress("food-drinks")}
        />
        <View style={styles.separator} />
        <Item
          icon="flower"
          label="Beauty & Health"
          onPress={() => onPress("beauty-health")}
        />
        <View style={styles.separator} />
        <Item
          icon="airplane"
          label="Travel & Adventure"
          onPress={() => onPress("travel-adventure")}
        />
      </View>
      <View style={styles.block}>
        <Item
          icon="glasses"
          label="Fashion & Accessories"
          onPress={() => onPress("fashion-accessories")}
        />
        <View style={styles.separator} />
        <Item
          icon="watch"
          label="Electronics & Gadgets"
          onPress={() => onPress("electronics-gadgets")}
        />
        <View style={styles.separator} />
        <Item
          icon="home-heart"
          label="Fitness & Wellbeing"
          onPress={() => onPress("fitness-wellbeing")}
        />
      </View>
    </View>
  );
};

export default Categories;
