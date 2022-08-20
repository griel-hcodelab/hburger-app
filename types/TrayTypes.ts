import { ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

export type TrayTypes = {
    visible: boolean
    items: any
}

export type TrayPanelTypes = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    panelY: SharedValue<number>;
    bottomY: number;
    gestureHandler: any;
    stylePanel: ViewStyle;
    styleArrow: ViewStyle;
  };