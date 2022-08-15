import { Dimensions, StatusBar } from "react-native";
import styled from "styled-components/native";
import CarteItem from "../../components/Carte/CarteItem";
import PayButton from "../../components/Footer/PayButton";
import Subtotal from "../../components/Footer/Subtotal";
import Tray from "../../components/Footer/Tray";
import Header from "../../components/Header";
import { colors } from "../../utils/variables";

const CarteScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      <Header />

      <CarteScrollView>
        <CarteItemCategory>Escolha o pão</CarteItemCategory>
        <CarteItem
          type="radio"
          name="Pão Australiano"
          value={3}
          checked={true}
        />
        <CarteItem
          type="radio"
          name="Pão de batata"
          value={2.5}
          checked={false}
        />
        <CarteItem
          type="radio"
          name="Pão tradicional"
          value={2}
          checked={false}
        />
        <CarteItemCategory>Ingredientes</CarteItemCategory>
        <CarteItem
          type="check"
          name="Pão Australiano"
          value={3}
          checked={true}
        />
        <CarteItem
          type="check"
          name="Pão de batata"
          value={2.5}
          checked={false}
        />
        <CarteItem
          type="check"
          name="Pão tradicional"
          value={2}
          checked={false}
        />
      </CarteScrollView>

      <Footer>
        <Tray quantity={0} />
        <Subtotal value={0} />
        <PayButton />
      </Footer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: ${colors.dark};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  position: relative;
`;
const CarteScrollView = styled.ScrollView`
  margin-top: 50px;
  padding: 20px;
`;
const Footer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 7px;
  width: 100%;
  background-color: white;
  height: 68px;
`;
const CarteItemCategory = styled.Text`
  font-size: 22px;
  color: ${colors.white};
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export default CarteScreen;
