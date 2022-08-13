import { Dimensions, ImageBackground, StatusBar, Text } from "react-native";
import styled from "styled-components/native";
import PayButton from "../../components/Footer/PayButton";
import Subtotal from "../../components/Footer/Subtotal";
import Tray from "../../components/Footer/Tray";
import Header from "../../components/Header";
import TrayIcon from "../../components/Icons/TrayIcon";
import Hburger from "../../components/Logo/Hburger";
import { colors } from "../../utils/variables";

const CarteScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      <Header />
      <Footer>
        <Tray quantity={0} />
        <Subtotal value={0} />
        <PayButton />
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${colors.dark};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  position: relative;
`;
const Footer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 20px;
  width: 100%;
  background-color: white;
  height: 68px;
`;

export default CarteScreen;
