import { Dimensions, StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import CarteItem from "../../components/Carte/CarteItem";
import PayButton from "../../components/Footer/PayButton";
import Subtotal from "../../components/Footer/Subtotal";
import Tray from "../../components/Footer/Tray";
import Header from "../../components/Header";
import { colors } from "../../utils/variables";

const CarteScreen = () => {
  const breads = [
    {
      name: "Pão Australiano",
      price: 3,
    },
    {
      name: "Pão de Batata",
      price: 2.5,
    },
    {
      name: "Pão Tradicional",
      price: 2,
    },
  ];
  const ingredients = [
    {
      name: "Queijo Cheddar",
      price: 2,
    },
    {
      name: "Queijo Mussarela",
      price: 2,
    },
    {
      name: "Queijo Parmesão",
      price: 2,
    },
    {
      name: "Carne Bovina 125g",
      price: 3,
    },
    {
      name: "Carne de Frango 125g",
      price: 2.5,
    },
    {
      name: "Carne de Peixe 125g",
      price: 2,
    },
  ];

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      <Header />

      <CarteScrollView>
        <CarteItemCategory>Escolha o pão</CarteItemCategory>
        {breads.map((bread, index) => (
          <CarteItem
            key={index}
            type="radio"
            name={bread.name}
            value={bread.price}
            checked={false}
          />
        ))}
        <CarteItemCategory>Ingredientes</CarteItemCategory>
        {ingredients.map((ingredient, index) => (
          <CarteItem
            key={index}
            type="check"
            name={ingredient.name}
            value={ingredient.price}
            checked={false}
          />
        ))}
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
const CarteScrollView = styled(ScrollView)`
  margin-top: 50px;
  margin-bottom: 80px;
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
