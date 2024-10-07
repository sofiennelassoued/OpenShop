import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import carousel from "../../../data/carousel";
import styles from "./index.styles";

const Carousel = () => {
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

export default Carousel;
