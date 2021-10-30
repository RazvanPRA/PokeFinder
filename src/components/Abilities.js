import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/COLORS";
import { SPACE_MEDIUM, MEDIUM_FONT } from "../constants/layouts";
import AbilityCard from "./AbilityCard";

const Abilities = ({ abilities }) => {
  return (
    <View>
      <View style={styles.spacer} />
      <Text style={styles.bigText}>Abilities:</Text>
      {abilities.map((item, index) => {
        return <AbilityCard key={index} item={item} />;
      })}
    </View>
  );
};

export default Abilities;

const styles = StyleSheet.create({
  bigText: {
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
    marginBottom: SPACE_MEDIUM,
  },
  spacer: {
    height: 1,
    backgroundColor: COLORS.colorTextDetails,
    marginVertical: SPACE_MEDIUM,
  },
});
