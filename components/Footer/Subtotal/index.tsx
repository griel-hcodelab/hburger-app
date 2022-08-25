import { PropsWithChildren } from "react";
import styled from "styled-components/native";
import { formatCurrency } from "../../../utils/formatCurrenty";
import { colors, sizes } from "../../../utils/variables";

type SubtotalPropsType = {
  value: number;
};

const Subtotal: React.FC<PropsWithChildren<SubtotalPropsType>> = ({
  value,
}) => {
  return (
    <Container>
      <SubtotalValue>{formatCurrency(value)}</SubtotalValue>
      <SubtotalLabel>SUBTOTAL</SubtotalLabel>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: flex-end;
  padding: 0 ${sizes.space * 2}px;
`;

const SubtotalValue = styled.Text`
  font-size: 24px;
`;

const SubtotalLabel = styled.Text`
  color: ${colors.gray};
`;

export default Subtotal;
