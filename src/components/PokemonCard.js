import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, Image, View } from "react-native";
import COLORS from "../constants/COLORS";
import { MEDIUM_FONT } from "../constants/fonts";
import { SPACE_MEDIUM } from "../constants/layouts";
import { pokeColors } from "../constants/pokeColors";
import { LinearGradient } from "expo-linear-gradient";
import { capitalizeString } from "../utils/capitalizeString";

const PokemonCard = ({ item, navigation }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${item.id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  const typePokemon = item?.pokemon_v2_pokemontypes[0]?.pokemon_v2_type?.name;
  const imageSource = data?.sprites?.front_default;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          pokeColors[typePokemon]?.first,
          pokeColors[typePokemon]?.second,
        ]}
        style={styles.gradient}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => {
            navigation.navigate("PokemonDetails", {
              item: item,
              sprites: data?.sprites,
              typePokemon: typePokemon,
            });
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.pokeImage}
            source={{
              uri: imageSource,
            }}
          />
          <Text style={[styles.text]}>{capitalizeString(item?.name)}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    aspectRatio: 0.718309,
    padding: SPACE_MEDIUM,
  },
  gradient: {
    borderRadius: 20,
  },
  pressable: {
    width: "100%",
    height: "100%",
  },

  pokeImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    marginBottom: 20,
    borderRadius: 20,
  },
  text: {
    alignSelf: "center",
    position: "absolute",
    bottom: SPACE_MEDIUM,
    color: COLORS.white,
    fontSize: MEDIUM_FONT - 2,
    fontFamily: "GlutenSemiBold",
    marginHorizontal: SPACE_MEDIUM,
  },
});
