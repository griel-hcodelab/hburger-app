import styled from "styled-components/native";
import { useCarte } from "../../../context/Carte";
import { formatCurrency } from "../../../utils/formatCurrenty";
import { colors, sizes } from "../../../utils/variables";

const Subtotal = () => {
  const Carte = useCarte();

  return (
    <Container>
      <SubtotalValue>{formatCurrency(Carte.total)}</SubtotalValue>
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
