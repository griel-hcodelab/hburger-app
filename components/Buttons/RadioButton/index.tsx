import { PropsWithChildren } from "react";
import styled from "styled-components/native";
import { colors } from "../../../utils/variables";

type RadioButtonTypes = {
  checked: boolean;
  onPress: () => void;
};

const RadioButton: React.FC<PropsWithChildren<RadioButtonTypes>> = ({
  checked,
  onPress
}) => {
  return (
    <>
      <RadioButtonContainer onPress={onPress}>
        {checked && <RadioButtonInner></RadioButtonInner>}
      </RadioButtonContainer>
    </>
  );
};

const RadioButtonContainer = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border: 1px solid ${colors.yellow};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
const RadioButtonInner = styled.View`
  background-color: ${colors.yellow};
  width: 20px;
  height: 20px;
  border-radius: 50px;
`;

export default RadioButton;
