import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/COLORS";
import { SPACE_LARGE, MEDIUM_FONT, SMALL_FONT } from "../constants/layouts";
import { capitalizeString } from "../utils/capitalizeString";

const AbilityCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>
        {capitalizeString(item?.pokemon_v2_ability?.name)}
      </Text>
      <Text style={styles.textDetails}>
        {item?.pokemon_v2_ability?.pokemon_v2_abilityeffecttexts?.[0]?.effect}
      </Text>
    </View>
  );
};

export default AbilityCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLORS.colorTextDetails,
    marginBottom: SPACE_LARGE,
    padding: SPACE_LARGE,
    paddingTop: 0,
  },
  bigText: {
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
  },
  textDetails: {
    fontSize: SMALL_FONT,
    color: COLORS.colorTextDetails,
  },
});
