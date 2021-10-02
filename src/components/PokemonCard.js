import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, Image, View } from "react-native";
import COLORS from "../constants/COLORS";
import { MEDIUM_FONT } from "../constants/fonts";
import { SPACE_MEDIUM } from "../constants/layouts";

const PokemonCard = ({ item, navigation }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${item.id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  const imageSource = data?.sprites?.front_default;
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          navigation.navigate("PokemonDetails", {
            data: item,
          });
        }}
      >
        <Image
          style={styles.pokeImage}
          source={{
            uri: imageSource,
          }}
        />
        <Text style={[styles.text]}>{item?.name}</Text>
      </Pressable>
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
  pressable: {
    width: "100%",
    height: "100%",
  },
  pokeImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderColor: "red",
    marginBottom: 20,
    borderRadius: 30,
  },
  text: {
    alignSelf: "center",
    position: "absolute",
    bottom: SPACE_MEDIUM,
    color: COLORS.white,
    fontSize: MEDIUM_FONT,
    // fontFamily: "Gluten",
  },
});
