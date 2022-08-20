import { useEffect, useState } from "react";
import { Button, Dimensions, StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import CarteItem from "../../components/Carte/CarteItem";
import PayButton from "../../components/Footer/PayButton";
import Subtotal from "../../components/Footer/Subtotal";
import TrayButton from "../../components/Footer/TrayButton";
import Header from "../../components/Header";
import Tray from "../../components/Tray";
import { CarteProvider, useCarte } from "../../context/Carte";

import { SelectedIngredientsTypes } from "../../types/CarteTypes";
import { colors } from "../../utils/variables";

const CarteScreenComponent = ({ navigation }: any) => {
  const [trayVisible, setTrayVisible] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const Carte = useCarte();

  useEffect(() => {
    Carte.trayItems.forEach((item)=>{
      if (!isNaN(item.subTotal)) {
        setTotal(total + item.subTotal);
      }
    })
  },[Carte.trayItems])

  const breads = [
    {
      id: 1,
      name: "Pão Australiano",
      price: 3,
    },
    {
      id: 2,
      name: "Pão de Batata",
      price: 2.5,
    },
    {
      id: 3,
      name: "Pão Tradicional",
      price: 2,
    },
  ];
  const ingredients = [
    {
      id: 1,
      name: "Queijo Cheddar",
      price: 2,
    },
    {
      id: 2,
      name: "Queijo Mussarela",
      price: 2,
    },
    {
      id: 3,
      name: "Queijo Parmesão",
      price: 2,
    },
    {
      id: 4,
      name: "Carne Bovina 125g",
      price: 3,
    },
    {
      id: 5,
      name: "Carne de Frango 125g",
      price: 2.5,
    },
    {
      id: 6,
      name: "Carne de Peixe 125g",
      price: 2,
    },
  ];

  const handlePress = ({ id, name, price }: SelectedIngredientsTypes) => {
    if (Carte.selectedIngredients.find((item) => item.id === id)) {
      Carte.removeIngredients(id);
    } else {
      Carte.addIngredients({ id, name, price });
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      <Header />

      <CarteScrollView>
        <CarteItemCategory>Escolha o pão</CarteItemCategory>
        {breads.map((bread) => (
          <CarteItem
            id={bread.id}
            key={bread.id}
            type="radio"
            name={bread.name}
            value={bread.price}
            checked={Carte.selectedBread?.id === bread.id}
            onPress={() =>
              Carte.addBread({
                id: bread.id,
                name: bread.name,
                price: bread.price,
              })
            }
          />
        ))}
        <CarteItemCategory>Ingredientes</CarteItemCategory>
        {ingredients.map((ingredient) => (
          <CarteItem
            id={ingredient.id}
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
        <View>
          <Button onPress={Carte.createBurger} title="Salvar" />
        </View>
      </CarteScrollView>

      <Tray visible={trayVisible} items={Carte.trayItems} />

      <Footer>
        <TrayButton
          onPress={() => setTrayVisible(!trayVisible)}
          quantity={Carte.trayItems?.length}
        />
        <Subtotal value={total} />
        <PayButton onPress={() => navigation.navigate("Payment")} />
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
  padding-bottom: 100px;
  height: ${Dimensions.get("screen").height}px;
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

export const CarteScreen = () => {
  return (
    <CarteProvider>
      <CarteScreenComponent />
    </CarteProvider>
  );
};
