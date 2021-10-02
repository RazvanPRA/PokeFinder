import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import COLORS from "../constants/COLORS";
import { useQuery } from "@apollo/client";
import { getPokemon } from "../queries/getPokemon";
import PokemonCard from "../components/PokemonCard";
import { SPACE_LARGE, SPACE_MEDIUM } from "../constants/layouts";

const PokemonList = ({ navigation }) => {
  const { loading, error, data } = useQuery(getPokemon, {
    variables: {
      name: "bul",
    },
  });
  // console.log({ data, name: data?.pokemon_v2_pokemon?.[0].name });
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.search} onChangeText={setText} value={text} />
        <Icon name="search" color={COLORS.header} style={styles.icon} />
      </View>

      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.contentFlatList}
        numColumns={2}
        data={data?.pokemon_v2_pokemon || []}
        renderItem={({ item }) => (
          <PokemonCard item={item} navigation={navigation} />
        )}
        initialNumToRender={10}
        ListHeaderComponentStyle={{ flexWrap: "wrap" }}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default PokemonList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: SPACE_LARGE,
    marginTop: SPACE_LARGE,
    justifyContent: "center",
  },
  search: {
    borderWidth: 2,
    borderColor: COLORS.header,
    borderRadius: 40,
    height: 46,
    paddingHorizontal: 20,
  },
  icon: {
    position: "absolute",
    right: SPACE_LARGE * 2,
    fontSize: 20,
  },
  flatList: {
    flex: 1,
  },
  contentFlatList: {
    padding: SPACE_MEDIUM,
  },
});
