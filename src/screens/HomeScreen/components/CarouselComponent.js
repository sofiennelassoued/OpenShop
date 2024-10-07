import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import carousel from "../../../data/carousel";
const { width, height } = Dimensions.get("window");

const CarouselComponent = () => {
  let flatListRef = useRef < FlatList < carousel >> null;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ index: index });
  };

  return (
    <View>
      <FlatList
        data={carousel}
        renderItem={({ item }) => (
          <Pressable onPress={() => console.log("clicked")}>
            {/* To use your own banner images, replace the 'uri' property in the 'source' prop of each Image component with the URL of your image from an API or data source. */}
            <Image source={{ uri: item.url }} style={styles.carouselImage} />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        pagingEnabled
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dotview}>
        {carousel.map(({}, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.circle,
              { backgroundColor: index == currentIndex ? "black" : "#d3d3d3" },
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
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
  carouselImage: {
    borderRadius: 16,
    marginLeft: 8,
    width: width - 16,
    height: 170,
    marginVertical: 10,
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

export default CarouselComponent;
