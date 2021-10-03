import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/COLORS";
import { MEDIUM_FONT, SMALL_FONT } from "../constants/fonts";
import { SCREEN_WIDTH, SPACE_LARGE, SPACE_MEDIUM } from "../constants/layouts";
import { pokeColors } from "../constants/pokeColors";
import { capitalizeString } from "../utils/capitalizeString";
import { LinearGradient } from "expo-linear-gradient";

const ImageCarousel = ({ name, imagesMap, types, typePokemon }) => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ position: "absolute" }}
        colors={[pokeColors[typePokemon].first, pokeColors[typePokemon].second]}
      >
        <ScrollView
          onScroll={({ nativeEvent }) => {
            const scrollPosition = nativeEvent?.contentOffset?.x;
            const activeIndex = Math.round(scrollPosition / SCREEN_WIDTH);
            console.log({ scrollPosition, activeIndex });
            setActiveButton(activeIndex);
          }}
          horizontal
          snapToInterval={SCREEN_WIDTH}
          showsHorizontalScrollIndicator={false}
          disableIntervalMomentum={true}
          style={styles.scrollView}
        >
          {imagesMap?.map((item, index) => {
            return (
              <Image
                resizeMode="contain"
                key={item}
                source={{
                  uri: item,
                }}
                style={styles.pokeImage}
              />
            );
          })}
        </ScrollView>
      </LinearGradient>

      <Text style={styles.title}>{capitalizeString(name)}</Text>
      <View>
        <View style={styles.containerTypes}>
          {types?.map((item) => {
            return (
              <Text
                style={styles.containerAbilities}
                key={item?.pokemon_v2_type?.name}
              >
                {capitalizeString(item?.pokemon_v2_type?.name)}
              </Text>
            );
          })}
        </View>
        <View style={styles.contentCircles}>
          {imagesMap?.map((item, index) => {
            return (
              <View
                style={[
                  styles.circles,
                  activeButton === index && styles.activeCircle,
                ]}
              ></View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "space-between",
    width: SCREEN_WIDTH,
    aspectRatio: 1.4,
  },
  containerTypes: {
    paddingHorizontal: SPACE_MEDIUM,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginRight: SPACE_LARGE,
    alignSelf: "flex-end",
    paddingBottom: 5,
  },
  containerAbilities: {
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
  },
  pokeImage: {
    width: SCREEN_WIDTH,
    aspectRatio: 1.4,
    marginTop: SPACE_LARGE,
  },
  title: {
    fontSize: MEDIUM_FONT,
    color: COLORS.white,
    textAlign: "center",
    marginTop: SPACE_MEDIUM,
  },
  contentCircles: {
    flexDirection: "row",
    alignSelf: "center",
  },
  circles: {
    height: 12,
    borderWidth: 2,
    aspectRatio: 1,
    borderRadius: 6,
    borderColor: COLORS.white,
    marginHorizontal: SPACE_MEDIUM / 2,
  },
  activeCircle: {
    backgroundColor: COLORS.white,
  },
});
