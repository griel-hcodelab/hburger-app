import { Image } from "react-native";

type IconProps = {
  style?: any;
};

const ShareIcon = ({ style }: IconProps) => {
  return (
    <Image
      source={require("../../../assets/share.png")}
      style={style}
    />
  );
};

export default ShareIcon;
