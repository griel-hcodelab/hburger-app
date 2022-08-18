import { createContext, useContext } from "react";
import { ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

type TrayPanelContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  panelY: SharedValue<number>;
  bottomY: number;
  gestureHandler: any;
  stylePanel: ViewStyle;
  styleArrow: ViewStyle;
};

const TrayPanelContext =
  createContext<TrayPanelContextType>({
    isOpen: false,
    setIsOpen: () => {},
    panelY: {} as SharedValue<number>,
    bottomY: 0,
    gestureHandler: {} as any,
    stylePanel: {} as any,
    styleArrow: {} as any,
  });

export const useTray = () => {
  const context = useContext(TrayPanelContext);

  return context;
};
