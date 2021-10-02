import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import { fonts } from "../constants/fonts";
import { SPACE_MEDIUM } from "../constants/layouts";

const PokemonDetails = ({ route }) => {
  const { data } = route.params;
  const name = data?.name;
  const types = data?.pokemon_v2_pokemontypes;
  const stats = data?.pokemon_v2_pokemonstat;
  const specy = data?.pokemon_v2_pokemonspecy;
  const abilities = data?.pokemon_v2_pokemonabilities;
  console.log({
    razvan: specy?.pokemon_v2_pokemonspecies?.[0]?.name || "Unknown",
  });
  return (
    <View style={styles.content}>
      <Text>{name}</Text>
      {/* <Image
        style={styles.pokeImage}
        source={require("../../pokeImage/denise-jans-l1SEP7nf2XU-unsplash.jpg")}
      /> */}
      {types.map((item) => {
        return (
          <Text key={item?.pokemon_v2_type?.name}>
            {item?.pokemon_v2_type?.name}
          </Text>
        );
      })}
      <Text style={styles.statsText}>
        Stats <Icon name="info" color="#403D56" style={styles.icon} />
      </Text>
      <Text>
        Habitat - {specy?.pokemon_v2_pokemonhabitat?.name || "Unknown"}
      </Text>
      <Text>
        Species - {specy?.pokemon_v2_pokemonspecies?.[0]?.name || "Unknown"}
      </Text>
      <View>
        <Text>Abilities</Text>
        {abilities.map((item) => {
          return (
            <View>
              <Text>{item?.pokemon_v2_ability?.name}</Text>
              <Text>
                {
                  item?.pokemon_v2_ability?.pokemon_v2_abilityeffecttexts?.[0]
                    ?.effect
                }
              </Text>
              <Text>
                {
                  item?.pokemon_v2_ability?.pokemon_v2_abilityeffecttexts?.[0]
                    ?.short_effect
                }
              </Text>
            </View>
          );
        })}
      </View>
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
  statsText: {
    fontSize: fonts.mediumFont,
  },
  icon: {
    fontSize: 20,
  },
});
