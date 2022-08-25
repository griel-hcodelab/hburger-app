import { PropsWithChildren } from "react";
import styled from "styled-components/native";
import { colors } from "../../../utils/variables";

type CheckButtonTypes = {
  checked: boolean;
  onPress: () => void;
};

const CheckButton: React.FC<PropsWithChildren<CheckButtonTypes>> = ({
  checked,
  onPress,
}) => {
  return (
    <>
      <CheckButtonContainer onPress={onPress}>
        {checked && <CheckButtonInner></CheckButtonInner>}
      </CheckButtonContainer>
    </>
  );
};

const CheckButtonContainer = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border: 1px solid ${colors.yellow};
  justify-content: center;
  align-items: center;
`;
const CheckButtonInner = styled.View`
  background-color: ${colors.yellow};
  width: 20px;
  height: 20px;
`;

export default CheckButton;
