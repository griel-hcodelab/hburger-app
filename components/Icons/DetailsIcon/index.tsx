import { Image } from "react-native";

type IconProps = {
  style?: any;
};

const DetailsIcon = ({ style }: IconProps) => {
  return (
    <Image
      source={require("../../../assets/details.png")}
      style={style}
    />
  );
};

export default DetailsIcon;
