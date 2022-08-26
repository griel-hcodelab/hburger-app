import { Image } from "react-native";

const TrayIcon = ({ style }: { style?: any }) => {
  return (
    <Image
      source={require("../../../assets/tray.png")}
      style={style || { height: 24, width: 24, marginRight: 10 }}
    />
  );
};

export default TrayIcon;
