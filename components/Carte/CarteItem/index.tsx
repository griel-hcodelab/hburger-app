import { PropsWithChildren } from "react";
import styled from "styled-components/native";
import { formatCurrency } from "../../../utils/formatCurrenty";
import { colors, sizes } from "../../../utils/variables";
import CheckButton from "../../Buttons/CheckButton";
import RadioButton from "../../Buttons/RadioButton";

type CarteItemTypes = {
  type: string;
  name: string;
  value: number;
  checked: boolean;
  onPress: () => void;
};

const CarteItem: React.FC<PropsWithChildren<CarteItemTypes>> = ({
  type,
  name,
  value,
  checked,
  onPress,
}) => {
  return (
    <CarteItemContainer onPress={onPress}>
      {type === "radio" && <RadioButton onPress={onPress} checked={checked} />}
      {type === "check" && <CheckButton onPress={onPress} checked={checked} />}
      <CarteItemWrap>
        <CarteItemText>{name}</CarteItemText>
        <CarteItemValue>{value === 0 ? 'Grátis!' : formatCurrency(value)}</CarteItemValue>
      </CarteItemWrap>
    </CarteItemContainer>
  );
};

const CarteItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: ${sizes.spacePx} 0;
`;
const CarteItemWrap = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-left: 10px;
  border-bottom-style: dotted;
  border-bottom-color: ${colors.yellow};
  border-bottom-width: 2px;
  border-radius: 1px;
`;
const CarteItemText = styled.Text`
  color: ${colors.yellow};
  font-size: 16px;
  font-weight: bold;
`;
const CarteItemValue = styled.Text`
  color: ${colors.yellow};
  font-size: 16px;
  font-weight: bold;
`;

export default CarteItem;
