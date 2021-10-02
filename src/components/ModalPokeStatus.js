import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import COLORS from "../constants/COLORS";
import { MEDIUM_FONT } from "../constants/fonts";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SPACE_LARGE,
  SPACE_MEDIUM,
} from "../constants/layouts";
import { capitalizeString } from "../utils/capitalizeString";
import CustomIcon from "./CustomIcon";

const ModalPokeStatus = ({ modalVisible, setModalVisible, stats, icons }) => {
  return (
    <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.iconX}
            onPress={() => setModalVisible(!modalVisible)}
            hitSlop={{
              left: 25,
              right: 25,
              top: 25,
              bottom: 25,
            }}
          >
            <CustomIcon
              name="close"
              family="AntDesign"
              color={COLORS.colorTextDetails}
              style={styles.icon}
            />
          </Pressable>
          {stats &&
            stats.map((item, index) => {
              return (
                <View key={index} style={styles.container}>
                  <CustomIcon
                    name={icons?.[item?.pokemon_v2_stat?.id]?.iconName}
                    family={item.iconFamily}
                    color={COLORS.colorTextDetails}
                    style={styles.icon}
                  />
                  <Text style={styles.text}>
                    {capitalizeString(item?.pokemon_v2_stat?.name).replace(
                      "-",
                      " "
                    )}
                    :{" "}
                  </Text>
                  <Text style={styles.text}>{item.base_stat}</Text>
                </View>
              );
            })}
        </View>
      </View>
    </Modal>
  );
};

export default ModalPokeStatus;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: SPACE_LARGE * 2,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: SPACE_MEDIUM,
    paddingHorizontal: SPACE_LARGE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconX: {
    position: "absolute",
    right: 0,
    top: 10,
  },
  icon: {
    fontSize: 20,
    marginRight: SPACE_MEDIUM,
  },
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
  },
  text: {
    color: COLORS.colorTextDetails,
    fontSize: MEDIUM_FONT,
  },
});
