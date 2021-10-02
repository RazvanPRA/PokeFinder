import { Dimensions } from "react-native";

const window = Dimensions.get("screen");
const { height, width } = window;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const SPACE_MEDIUM = 10;
export const SPACE_LARGE = 20;
