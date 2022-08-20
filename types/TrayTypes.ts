import { ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { SelectedBreadTypes, SelectedIngredientsTypes } from "./CarteTypes";

export type TrayTypes = {
  visible: boolean;
  items: any;
};

export type TrayPanelTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  panelY: SharedValue<number>;
  bottomY: number;
  gestureHandler: any;
  stylePanel: ViewStyle;
  styleArrow: ViewStyle;
};

export type TrayItemsTypes = {
  id: number;
  bread: SelectedBreadTypes | undefined;
  ingredients: SelectedIngredientsTypes[];
  subTotal: number;
};
