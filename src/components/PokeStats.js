import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import CustomIcon from "./CustomIcon";
import COLORS from "../constants/COLORS";
import { MEDIUM_FONT } from "../constants/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/layouts";
import ModalPokeStatus from "./ModalPokeStatus";

const PokeStats = ({ stats }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const icons = {
    1: {
      iconName: "heart",
      iconFamily: "MaterialCommunityIcons",
    },
    2: {
      iconName: "sword",
      iconFamily: "MaterialCommunityIcons",
    },
    4: {
      iconName: "sword-cross",
      iconFamily: "MaterialCommunityIcons",
    },
    3: {
      iconName: "shield",
      iconFamily: "Ionicons",
    },
    5: {
      iconName: "shield-star",
      iconFamily: "MaterialCommunityIcons",
    },
    6: {
      iconName: "run-fast",
      iconFamily: "MaterialCommunityIcons",
    },
  };

  return (
    <Pressable onPress={() => setModalVisible(true)}>
      <Text style={styles.bigText}>
        Stats{" "}
        <CustomIcon
          name="info"
          family={"Foundation"}
          color={COLORS.colorTextDetails}
          style={styles.icon}
        />
      </Text>
      <ModalPokeStatus
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        stats={stats}
        icons={icons}
      />

      <View style={styles.content}>
        {stats &&
          stats.map((item) => {
            return (
              <View style={styles.container}>
                <CustomIcon
                  name={icons?.[item?.pokemon_v2_stat?.id]?.iconName}
                  family={item.iconFamily}
                  color={COLORS.colorTextDetails}
                  style={styles.icon}
                  // icons={icons}
                />
                <Text style={styles.text}>{item.base_stat}</Text>
              </View>
            );
          })}
      </View>
    </Pressable>
  );
};

export default PokeStats;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigText: {
    fontSize: MEDIUM_FONT,
    color: COLORS.colorTextDetails,
  },
  container: {
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "center",
    flex: 1,
    borderColor: COLORS.colorTextDetails,
    aspectRatio: 0.837,
    margin: 5,
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  icon: {
    fontSize: 20,
  },
  text: {
    color: COLORS.colorTextDetails,
  },
});
