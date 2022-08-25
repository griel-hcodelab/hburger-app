import { useEffect, useState } from "react";
import { Button, Dimensions, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import CarteItem from "../../components/Carte/CarteItem";
import PayButton from "../../components/Footer/PayButton";
import Subtotal from "../../components/Footer/Subtotal";
import TrayButton from "../../components/Footer/TrayButton";
import Header from "../../components/Header";
import Tray from "../../components/Tray";
import { CarteProvider, useCarte } from "../../context/Carte";
import { BREADS, INGREDIENTS } from "../../data";

import IngredientType from "../../types/Ingredient";
import { colors } from "../../utils/variables";

const CarteScreenComponent = ({ navigation }: any) => {
  const [trayVisible, setTrayVisible] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const Carte = useCarte();

  useEffect(() => {
    Carte.trayItems.forEach((item) => {
      if (!isNaN(item.subTotal)) {
        setTotal(total + item.subTotal);
      }
    });
  }, [Carte.trayItems]);

  const handlePress = (ingredient: IngredientType) => {
    const ingredientIsSelected = !!(Carte.selectedIngredients.find((item) => item.id === ingredient.id));

    if (ingredientIsSelected) {
      Carte.removeIngredients(ingredient.id);
    } else {
      Carte.addIngredients(ingredient);
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      <Header />

      <CarteScrollView>
        <CarteItemCategory>Escolha o pão</CarteItemCategory>
        {BREADS.map((bread) => (
          <CarteItem
            key={bread.id}
            type="radio"
            name={bread.name}
            value={bread.price}
            checked={Carte.selectedBread?.id === bread.id}
            onPress={() => Carte.addBread(bread)}
          />
        ))}
        <CarteItemCategory>Ingredientes</CarteItemCategory>
        {INGREDIENTS.map((ingredient) => (
          <CarteItem
            key={ingredient.id}
            type="check"
            name={ingredient.name}
            value={ingredient.price}
            checked={
              Carte.selectedIngredients.find(
                (item) => item.id === ingredient.id
              ) !== undefined
            }
            onPress={() => handlePress(ingredient)}
          />
        ))}
      </CarteScrollView>

      <Tray visible={trayVisible} items={Carte.trayItems} />

      <Footer>
        <Button
          disabled={!Carte.selectedBread || !Carte.selectedIngredients.length}
          onPress={Carte.createBurger}
          title={(!Carte.selectedBread || !Carte.selectedIngredients.length) ? "Escolha seu lanche" : "Salvar"}
        />
        <FooterButtonsContainer>
          <TrayButton
            onPress={() => setTrayVisible(!trayVisible)}
            quantity={Carte.trayItems?.length}
          />
          <Subtotal value={total} />
          <PayButton onPress={() => navigation.navigate("Payment")} />
        </FooterButtonsContainer>
      </Footer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: ${colors.dark};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

const CarteScrollView = styled(ScrollView)`
  margin-top: 50px;
  margin-bottom: 110px;
  padding: 0 20px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterButtonsContainer = styled.View`
  flex-direction: row;
  background-color: ${colors.white};
`;

const CarteItemCategory = styled.Text`
  font-size: 22px;
  color: ${colors.white};
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const CarteScreen = ({ navigation }: any) => {
  return (
    <CarteProvider>
      <CarteScreenComponent navigation={navigation} />
    </CarteProvider>
  );
};
