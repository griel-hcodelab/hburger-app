import { PropsWithChildren } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { formatCurrency } from "../../../utils/formatCurrenty";
import { sizes } from "../../../utils/variables";

type SubtotalPropsType = {
  value: number;
};

const Subtotal: React.FC<PropsWithChildren<SubtotalPropsType>> = ({
  value,
}) => {
  return (
    <Container>
      <SubtotalValue>{formatCurrency(value)}</SubtotalValue>
      <Text>SUBTOTAL</Text>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: flex-end;
  padding: ${sizes.spacePx};
`;
const SubtotalValue = styled.Text`
  font-size: 24px;
`;

export default Subtotal;
