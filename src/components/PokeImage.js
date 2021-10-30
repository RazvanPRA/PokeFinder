import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SCREEN_WIDTH } from "../constants/layouts";

const PokeImage = ({ name, item, types, isActive }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image
        source={{
          uri: item,
        }}
        style={styles.pokeImage}
      />
      {types?.map((item) => {
        return (
          <Text
            style={styles.containerAbilities}
            key={item?.pokemon_v2_type?.name}
          >
            {item?.pokemon_v2_type?.name}
          </Text>
        );
      })}
    </View>
  );
};

export default PokeImage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerAbilities: {
    paddingLeft: SCREEN_WIDTH / 1.5,
  },
  pokeImage: {
    width: SCREEN_WIDTH,
    aspectRatio: 1.5,
  },
});
