import { PropsWithChildren } from "react";
import styled from "styled-components/native";
import { colors } from "../../../utils/variables";
import TrayIcon from "../../Icons/TrayIcon";

type TrayItemsPropsType = {
  quantity: number;
  onPress: () => void;
};

const trayText = (quantity: number) => {
  if (quantity === 0) {
    return "Nenhum hamburger";
  }

  return `${quantity} hamburgers`;
}

const TrayButton: React.FC<PropsWithChildren<TrayItemsPropsType>> = ({
  quantity,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <TrayIcon />
      <TextContainer>
        <TrayText>Ver bandeja</TrayText>
        <TrayTextItems>{trayText(quantity)}</TrayTextItems>
      </TextContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.orange};
  align-items: center;
  padding: 0 10px;
  height: 100%;
  flex: 1;
`;
const TextContainer = styled.View`
  flex-direction: column;
`;
const TrayText = styled.Text``;
const TrayTextItems = styled.Text`
  font-weight: bold;
`;

export default TrayButton;
