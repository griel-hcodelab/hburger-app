import { PropsWithChildren } from "react";
import styled from "styled-components/native";
import { colors } from "../../utils/variables";

type HburgerProps = {
  fontSize?: number;
  logoSize?: number;
};

const Hburger: React.FC<PropsWithChildren<HburgerProps>> = ({
  fontSize,
  logoSize,
}) => {
  return (
    <Container>
      <LogoBurger
        logoSize={logoSize}
        source={require("../../assets/burger.png")}
      />
      <TextContainer>
        <TextH fontSize={fontSize}>h</TextH>
        <TextBurger fontSize={fontSize}>burger</TextBurger>
      </TextContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoBurger = styled.Image<{ logoSize: HburgerProps }>`
  width: ${({ logoSize }) => (logoSize ? logoSize : "100")}px;
  height: ${({ logoSize }) => (logoSize ? logoSize : "100")}px;
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
