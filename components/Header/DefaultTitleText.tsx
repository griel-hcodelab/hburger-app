import { Text, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../utils/variables";

const DefaultTitleText = () => {
  return (
    <Container>
      <TextDefaultStyle style={{ color: "#FFF" }}>
        Monte o seu{" "}
      </TextDefaultStyle>
      <TextDefaultStyle style={{ color: colors.orange }}>
        hburger
      </TextDefaultStyle>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextDefaultStyle = styled.Text`
  font-size: 30px;
`;

export default DefaultTitleText;
