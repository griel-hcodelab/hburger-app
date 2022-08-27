import styled from "styled-components/native";
import { formatCurrency } from "../../utils/formatCurrenty";
import { colors, sizes } from "../../utils/variables";
import DeleteIcon from "../Icons/DeleteIcon";
import DetailsIcon from "../Icons/DetailsIcon";
import ShareIcon from "../Icons/ShareIcon";

type OrderCardProps = {
  id: number;
  total: number;
  items: number;
};

const formatId = (id: string) => {
  const ID_MAX_LENGHT = 9;

  if (id.length >= ID_MAX_LENGHT) {
    return id.substring(0, ID_MAX_LENGHT);
  }

  return id.padStart(ID_MAX_LENGHT, '0');
};

const OrderCard = ({ id, total, items }: OrderCardProps) => {
  return (
    <Card>
      <CardId>#{formatId(String(id))}</CardId>
      <CardDetails>
        <CardDetailsHeader>Detalhes do Pedido</CardDetailsHeader>
        <CardDetail>
          <CardDetailText>Data:</CardDetailText>
          <CardDetailText>01/01/2022</CardDetailText>
        </CardDetail>
        <CardDetail>
          <CardDetailText>Valor:</CardDetailText>
          <CardDetailText>{formatCurrency(total)}</CardDetailText>
        </CardDetail>
        <CardDetail>
          <CardDetailText>Itens:</CardDetailText>
          <CardDetailText>{items}</CardDetailText>
        </CardDetail>
        <CardDetail>
          <CardDetailText>Nº:</CardDetailText>
          <CardDetailText>{formatId(String(id))}</CardDetailText>
        </CardDetail>
      </CardDetails>
      <CardControls>
        <CardControlButton>
          <ShareIcon />
        </CardControlButton>
        <CardControlButton>
          <DetailsIcon />
        </CardControlButton>
        <CardControlButton>
          <DeleteIcon />
        </CardControlButton>
      </CardControls>
    </Card>
  );
};

const CARD_HEIGHT = 165;

const Card = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${CARD_HEIGHT}px;
  background-color: ${colors.white};
  border-radius: ${sizes.spacePx};
  margin-bottom: ${sizes.space * 2}px;
  position: relative;
`;
  
const CardId = styled.Text`
  transform: rotate(-90deg);
  margin: 0 8px;
  font-size: 24px;
  color: ${colors.dark};
  position: absolute;
  top: ${CARD_HEIGHT - 100}px;
  left: -65px;
`;

const CardDetails = styled.View`
  flex: 1;
  margin-left: 38px;
  margin-right: 10px;
`;

const CardDetailsHeader = styled.Text`
  text-align: center;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 8px;
  padding: 8px 0;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-weight: 900;
  text-transform: uppercase;
`;

const CardDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CardDetailText = styled.Text`
  font-size: 14px;
  color: ${colors.dark};
  text-transform: uppercase;
`;

const CardControls = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 62px;
  height: ${CARD_HEIGHT}px;
  border-style: dashed;
  border-left-color: ${colors.dark}; 
  border-left-width: 1px;
`;

const CardControlButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export default OrderCard;
