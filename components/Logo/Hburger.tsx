import { PropsWithChildren } from "react";
import styled from "styled-components/native";
import { colors, sizes } from "../../utils/variables";

type HburgerProps = {
  fontSize?: number;
  logoSize?: number;
  onPress?: () => void;
};

const Hburger: React.FC<PropsWithChildren<HburgerProps>> = ({
  fontSize,
  logoSize,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <>
        <LogoBurger
          logoSize={logoSize}
          source={require("../../assets/burger.png")}
        />
        <TextContainer>
          <TextH fontSize={fontSize}>h</TextH>
          <TextBurger fontSize={fontSize}>burger</TextBurger>
        </TextContainer>
      </>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${sizes.spacePx};
`;
const LogoBurger = styled.Image<{ logoSize: HburgerProps }>`
  width: ${({ logoSize }) => (logoSize ? logoSize : "90")}px;
  height: ${({ logoSize }) => (logoSize ? logoSize : "90")}px;
`;
const TextContainer = styled.View`
  flex-direction: row;
`;
const TextH = styled.Text<{ fontSize: HburgerProps }>`
  font-family: "Podkova";
  color: ${colors.orange};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "64")}px;
`;
const TextBurger = styled.Text<{ fontSize: HburgerProps }>`
  font-family: "Podkova";
  color: ${colors.gray};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "64")}px;
`;

export default Hburger;
