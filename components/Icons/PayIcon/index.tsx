import { Image } from "react-native";

const PayIcon = () => {
  return (
    <Image
      source={require("../../../assets/pay.png")}
      style={{ height: 20, width: 20, marginRight: 10, marginLeft: 10 }}
    />
  );
};

export default PayIcon;
