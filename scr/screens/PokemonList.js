import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PokemonDetails = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("PokemonDetails");
        }}
      >
        <Text>Poke</Text>
      </Pressable>
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({});
