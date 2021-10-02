import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PokemonDetails = () => {
  return (
    <View>
      <Image
        style={styles.pokeImage}
        source={require("../../pokeImage/denise-jans-l1SEP7nf2XU-unsplash.jpg")}
      />
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  pokeImage: {},
});
