import { PropsWithChildren } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../utils/variables";
import TrayIcon from "../../Icons/TrayIcon";

type TrayItemsPropsType = {
  quantity: number;
  onPress: () => void;
};

const TrayButton: React.FC<PropsWithChildren<TrayItemsPropsType>> = ({
  quantity,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <TrayIcon />
      <TextContainer>
        <TrayText>Ver bandeja</TrayText>
        <TrayTextItems>
          {quantity === 0 ? 0 : quantity}{" "}
          {quantity <= 1 ? "hamburger" : "hamburgers"}
        </TrayTextItems>
      </TextContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.orange};
  align-items: center;
  padding: 10px;
  height: 68px;
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
