import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Abilities from "../components/Abilities";
import ImageCarousel from "../components/ImageCarousel";
import PokeStats from "../components/PokeStats";
import COLORS from "../constants/COLORS";
import { SPACE_LARGE, MEDIUM_FONT, SMALL_FONT } from "../constants/layouts";
import { capitalizeString } from "../utils/capitalizeString";

const PokemonDetails = ({ route }) => {
  const { item, sprites, typePokemon } = route.params;
  const name = item?.name;
  const types = item?.pokemon_v2_pokemontypes;
  const stats = item?.pokemon_v2_pokemonstats;
  const specy = item?.pokemon_v2_pokemonspecy;
  const abilities = item?.pokemon_v2_pokemonabilities;

  const imagesMap = Object.values(sprites)
    .filter((item) => {
      return typeof item === "string";
    })
    .reverse();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageCarousel
        typePokemon={typePokemon}
        name={name}
        imagesMap={imagesMap}
        types={types}
      />
      <View style={styles.container}>
        <PokeStats stats={stats} />
        <Text style={styles.bigText}>
          Habitat -{" "}
          {capitalizeString(specy?.pokemon_v2_pokemonhabitat?.name) ||
            "Unknown"}
        </Text>
        <Text style={styles.bigText}>
          Species -{" "}
          {capitalizeString(specy?.pokemon_v2_pokemonspecies?.[0]?.name) ||
            "Unknown"}
        </Text>

        <Abilities abilities={abilities} />
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACE_LARGE,
    paddingTop: SPACE_LARGE,
  },
  bigText: {
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
  },
  icon: {
    fontSize: MEDIUM_FONT - 2,
  },
  textDetails: {
    fontSize: SMALL_FONT,
    color: COLORS.colorTextDetails,
  },
});
