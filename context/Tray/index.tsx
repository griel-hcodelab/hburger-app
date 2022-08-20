import { createContext, ReactNode, useContext } from "react";
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

const TrayPanelContext = createContext<TrayPanelContextType>({} as TrayPanelContextType);

export default function TrayProvider({ children }: { children: ReactNode }) {}

export const useTray = () => {
  const context = useContext(TrayPanelContext);

  return context;
};
