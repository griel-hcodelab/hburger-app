import { Image } from "react-native";

const TrayIcon = () => {
  return (
    <Image
      source={require("../../../assets/tray.png")}
      style={{ height: 24, width: 24, marginRight: 10 }}
    />
  );
};

export default TrayIcon;
