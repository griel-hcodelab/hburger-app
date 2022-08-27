import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { colors, sizes } from "../../../utils/variables";
import PayIcon from "../../Icons/PayIcon";

type PayButtonProps = {
  onPress?: () => void;
  disabled: boolean;
};

const PayButton = ({ onPress, disabled }: PayButtonProps) => {
  const [disabledBtn, setDisabledBtn] = useState<boolean>()

  useEffect(()=>{
    setDisabledBtn(disabled)
  },[disabled])

  return (
    <Container disabled={disabledBtn} onPress={onPress}>
      <PayIcon />
      <PayText>PAGAR</PayText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray2};
`;
const PayText = styled.Text`
  font-size: 10px;
  margin-top: ${sizes.spacePx};
`;

export default PayButton;
