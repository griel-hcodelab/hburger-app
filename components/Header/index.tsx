import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../utils/variables";
import Hburger from "../Logo/Hburger";
import DefaultTitleText from "./DefaultTitleText";
import UserProfilePhoto from "./UserProfilePhoto";

type HeaderTypes = {
  title?: string;
};

const Header: React.FC<PropsWithChildren<HeaderTypes>> = ({ title }) => {
  return (
    <Container>
      <ImageBackground
        source={require("../../assets/header-bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <UserProfilePhoto />
        <LinearGradient
          colors={["transparent", "#070d0d"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 0,
            y: 1,
          }}
          style={{ width: "100%", height: 200 }}
        >
          <Hburger />
          <Title>
            {title ? <TitleText>{title}</TitleText> : <DefaultTitleText />}
          </Title>
        </LinearGradient>
      </ImageBackground>
    </Container>
  );
};

const Container = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.View`
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 30px;
  color: ${colors.white};
`;

export default Header;
