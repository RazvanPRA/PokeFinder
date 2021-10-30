import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/COLORS";
import {
  SCREEN_WIDTH,
  SPACE_LARGE,
  SPACE_MEDIUM,
  MEDIUM_FONT,
  BIG_FONT,
  isIos,
} from "../constants/layouts";
import { capitalizeString } from "../utils/capitalizeString";
import { LinearGradient } from "expo-linear-gradient";

const ImageCarousel = ({ name, imagesMap, types, typePokemon }) => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ position: "absolute" }}
        colors={[
          COLORS.pokeColors[typePokemon]?.first,
          COLORS.pokeColors[typePokemon]?.second,
        ]}
      >
        <ScrollView
          onScroll={({ nativeEvent }) => {
            const scrollPosition = nativeEvent?.contentOffset?.x;
            const activeIndex = Math.round(scrollPosition / SCREEN_WIDTH);
            setActiveButton(activeIndex);
          }}
          horizontal
          snapToInterval={SCREEN_WIDTH}
          showsHorizontalScrollIndicator={false}
          disableIntervalMomentum={true}
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
                key={index}
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
    paddingTop: isIos ? 7 : 0,
  },
  containerAbilities: {
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
    fontFamily: "GlutenSemiBold",
  },
  pokeImage: {
    width: SCREEN_WIDTH,
    aspectRatio: 1.4,
    marginTop: SPACE_LARGE,
  },
  title: {
    fontSize: BIG_FONT,
    color: COLORS.white,
    textAlign: "center",
    marginTop: SPACE_MEDIUM,
    fontFamily: "GlutenSemiBold",
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
