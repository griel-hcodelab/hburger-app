import { PropsWithChildren } from "react";
import { Dimensions, ViewStyle } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { useTray } from "../../context/Tray";
import { TrayTypes } from "../../types/TrayTypes";
import { formatCurrency } from "../../utils/formatCurrenty";
import { colors, sizes } from "../../utils/variables";

const Burger = [
  {
    id: 1,
    bread: {
      id: 1,
      name: "Pão Australiano",
      price: 3,
    },
    ingredients: [
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
    ],
    total: 5,
  },
];

const Tray: React.FC<PropsWithChildren<TrayTypes>> = ({ visible, items }) => {
    const {stylePanel, gestureHandler} = useTray()
  return (
    <>
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={stylePanel} >
      <TrayContainer visible={visible}>
        {items && <TrayItems>
          {items.map((item: any) => (
            <TrayItem key={item.id}>
              <TrayItemIdBlock>
                <TrayItemId>{item.id}</TrayItemId>
              </TrayItemIdBlock>
              <TrayIngredientsContainer>
                <TrayIngredientBlock>
                  <TrayIngredient>{item.bread.name}</TrayIngredient>
                  <TrayIngredientPrice>
                    {formatCurrency(item.bread.price)}
                  </TrayIngredientPrice>
                </TrayIngredientBlock>
                {item.ingredients.map((ingredient: any) => (
                  <TrayIngredientBlock key={ingredient.id}>
                    <TrayIngredient>{ingredient.name}</TrayIngredient>
                    <TrayIngredientPrice>
                      {formatCurrency(ingredient.price)}
                    </TrayIngredientPrice>
                  </TrayIngredientBlock>
                ))}
              </TrayIngredientsContainer>
              <TrayPriceBlock>
                <TrayPrice>{formatCurrency(item.total)}</TrayPrice>
              </TrayPriceBlock>
            </TrayItem>
          ))}
        </TrayItems>}
      </TrayContainer>
      </Animated.View>
      </PanGestureHandler>
    </>
  );
};

const TrayContainer = styled.View<{ visible: boolean }>`
  background-color: ${colors.orange};
  width: 100%;
  height: ${Dimensions.get("window").height - 315}px;
  position: absolute;
  bottom: ${({visible}) => (visible ? 75 : -Dimensions.get('screen').height )}px;
`;
const TrayItems = styled.ScrollView`
  background-color: #fff;
  margin: ${sizes.spacePx};
  border-radius: ${sizes.spacePx};
`;
const TrayItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${sizes.spacePx};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.orange};
`;
const TrayItemIdBlock = styled.View`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${colors.orange};
`;
const TrayItemId = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  font-weight: bold;
`;
const TrayIngredientBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-left: 20px;
  margin-right: 10px;
  padding-right: 10px;
  border-right-width: 1px;
`;
const TrayIngredientsContainer = styled.View`
  flex: 1;
`;
const TrayPriceBlock = styled.View`
  justify-content: center;
  align-items: center;
`;
const TrayPrice = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;
const TrayIngredient = styled.Text``;
const TrayIngredientPrice = styled.Text``;

export default Tray;
