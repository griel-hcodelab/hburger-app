import { Dimensions, ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Header from "../../components/Header";
import { colors } from "../../utils/variables";

const OrdersScreen = () => {
  return (
    <ScrollView>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
        <Header title="Meus Pedidos" />
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  background-color: ${colors.dark};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export default OrdersScreen;
