import { Image } from "react-native";

type IconProps = {
  style?: any;
};

const DeleteIcon = ({ style }: IconProps) => {
  return (
    <Image
      source={require("../../../assets/delete.png")}
      style={style}
    />
  );
};

export default DeleteIcon;
