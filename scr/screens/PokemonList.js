import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import COLORS from "../constants/COLORS";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const { height, width } = window;
const PokemonList = ({ navigation }) => {
  const [text, setText] = useState("");
  const img = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 0 },
  ];

  return (
    <View>
      <View style={styles.headerStyle}>
        <TextInput style={styles.search} onChangeText={setText} value={text} />
        <Icon name="search" color={COLORS.header} style={styles.icon} />
      </View>
      <Pressable>
        <Text style={{ borderWidth: 1 }}>Poke</Text>
      </Pressable>

      <FlatList
        data={img}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("PokemonDetails");
            }}
          >
            <Image
              style={styles.pokeImage}
              source={require("../../pokeImage/denise-jans-l1SEP7nf2XU-unsplash.jpg")}
            />
          </Pressable>
        )}
        initialNumToRender={10}
        ListHeaderComponentStyle={{ flexWrap: "wrap" }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PokemonList;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  headerStyle: {
    padding: 20,
    flexDirection: "row",
  },
  search: {
    borderWidth: 2,
    borderColor: COLORS.header,
    borderRadius: 40,
    flex: 1,
    height: 46,
    paddingHorizontal: 20,
  },
  icon: {
    position: "absolute",
    top: height / 21.5,
    left: width / 1.16,
    fontSize: 20,
  },
  pokeImage: {
    width: width / 2.5,
    height: height / 3,
    borderWidth: 5,
    borderColor: "red",
    marginBottom: 20,
  },
});
