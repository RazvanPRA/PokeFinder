import { Dimensions, Platform } from "react-native";

export const isIos = Platform.OS === "ios";

const window = Dimensions.get("screen");
const { height, width } = window;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const SPACE_MEDIUM = 10;
export const SPACE_LARGE = 20;

export const BIG_FONT = 30;
export const MEDIUM_FONT = 22;
export const SMALL_FONT = 14;
