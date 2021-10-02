import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Abilities from "../components/Abilities";
import AbilityCard from "../components/AbilityCard";

import PokeStats from "../components/PokeStats";
import COLORS from "../constants/COLORS";
import { MEDIUM_FONT, SMALL_FONT } from "../constants/fonts";
import { SPACE_MEDIUM } from "../constants/layouts";
import { capitalizeString } from "../utils/capitalizeString";

const PokemonDetails = ({ route }) => {
  const { data } = route.params;
  const name = data?.name;
  const types = data?.pokemon_v2_pokemontypes;
  const stats = data?.pokemon_v2_pokemonstats;
  const specy = data?.pokemon_v2_pokemonspecy;
  const abilities = data?.pokemon_v2_pokemonabilities;

  return (
    <View style={styles.content}>
      <Text>{name}</Text>
      {/* <Image
        style={styles.pokeImage}
        source={require("../../pokeImage/denise-jans-l1SEP7nf2XU-unsplash.jpg")}
      /> */}
      {types.map((item) => {
        return (
          <Text style={styles.content} key={item?.pokemon_v2_type?.name}>
            {item?.pokemon_v2_type?.name}
          </Text>
        );
      })}

      <PokeStats stats={stats} />
      <Text style={styles.bigText}>
        Habitat -{" "}
        {capitalizeString(specy?.pokemon_v2_pokemonhabitat?.name) || "Unknown"}
      </Text>
      <Text style={styles.bigText}>
        Species -{" "}
        {capitalizeString(specy?.pokemon_v2_pokemonspecies?.[0]?.name) ||
          "Unknown"}
      </Text>

      <Abilities abilities={abilities} />
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  content: {
    padding: SPACE_MEDIUM,
  },
  pokeImage: {
    width: 100,
    aspectRatio: 1,
  },
  bigText: {
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
  },
  icon: {
    fontSize: 20,
  },
  textDetails: {
    fontSize: SMALL_FONT,
    color: COLORS.colorTextDetails,
  },
});
