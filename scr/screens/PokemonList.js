import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const PokemonList = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("PokemonDetails");
        }}
      >
        <Text>Poke</Text>
        <Icon name="airplay" color="#403D56" />
      </Pressable>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({});
