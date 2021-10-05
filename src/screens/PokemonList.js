import React, { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import COLORS from "../constants/COLORS";
import { useQuery } from "@apollo/client";
import { getPokemon } from "../queries/getPokemon";
import PokemonCard from "../components/PokemonCard";
import { SPACE_LARGE, SPACE_MEDIUM, MEDIUM_FONT } from "../constants/layouts";
import debounce from "lodash.debounce";
import LottieView from "lottie-react-native";
import CustomIcon from "../components/CustomIcon";

const PokemonList = ({ navigation }) => {
  const [text, setText] = useState("");

  const searchRef = useRef();

  const { loading, error, data } = useQuery(getPokemon, {
    variables: {
      name: text.toLowerCase(),
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          ref={searchRef}
          style={styles.search}
          placeholder="Search for your pokemon"
          onChangeText={debounce((term) => {
            setText(term);
          }, 1000)}
        />
        <Pressable
          style={styles.iconContainer}
          onPress={() => {
            if (searchRef) {
              searchRef.current.clear();
              setText("");
            }
          }}
        >
          <CustomIcon
            name={text !== "" ? "close" : "search"}
            family={text !== "" ? "AntDesign" : "Feather"}
            color={COLORS.header}
            style={styles.icon}
          />
        </Pressable>
      </View>

      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.contentFlatList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.noPokemon}>
              There is no pokemon to catch with this name
            </Text>
            <View style={styles.containerBee}>
              <Image
                style={styles.pokeBall}
                source={require("../../assets/pokeball.png")}
              />
              <LottieView
                source={require("../../assets/bee.json")}
                autoPlay
                loop={true}
                style={styles.bee}
              />
            </View>
          </View>
        )}
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
    backgroundColor: COLORS.white,
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
    paddingHorizontal: SPACE_LARGE,
    fontFamily: "GlutenSemiBold",
    color: COLORS.colorTextDetails,
  },
  iconContainer: {
    position: "absolute",
    right: SPACE_LARGE * 2,
  },
  icon: {
    fontSize: MEDIUM_FONT - 2,
  },
  flatList: {
    flex: 1,
  },
  contentFlatList: {
    padding: SPACE_MEDIUM,
  },
  noPokemon: {
    textAlign: "center",
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
  },
  bee: {
    width: 150,
    height: 150,
    zIndex: 1,
    position: "absolute",
  },
  pokeBall: {
    height: 100,
    width: 100,
    zIndex: 2,
    position: "absolute",
    marginTop: 100,
    right: 20,
  },
  containerBee: {
    alignSelf: "center",
    alignItems: "center",
    height: 300,
    marginTop: 30,
  },
});
