import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import COLORS from "../constants/COLORS";
import { SPACE_LARGE, SPACE_MEDIUM, MEDIUM_FONT } from "../constants/layouts";
import { capitalizeString } from "../utils/capitalizeString";
import CustomIcon from "./CustomIcon";

const ModalPokeStatus = ({ modalVisible, setModalVisible, stats, icons }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}

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
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingVertical: SPACE_MEDIUM,
    paddingHorizontal: SPACE_LARGE,
    shadowColor: COLORS.black,
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
    fontSize: MEDIUM_FONT - 2,
    marginRight: SPACE_MEDIUM,
  },
  container: {
    flexDirection: "row",
    paddingVertical: SPACE_MEDIUM / 2,
    alignItems: "center",
  },
  text: {
    color: COLORS.colorTextDetails,
    fontSize: MEDIUM_FONT,
  },
});
