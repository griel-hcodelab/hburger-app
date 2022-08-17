import { Dimensions, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";
import { colors, sizes } from "../../utils/variables";

const orders = [
  {
    id: 1,
    total: 49.90,
    items: 2,
    createdAt: new Date(),
  },
  {
    id: 5665,
    total: 59.90,
    items: 2,
    createdAt: new Date(),
  },
  {
    id: 12345678,
    total: 59.90,
    items: 2,
    createdAt: new Date(),
  },
  {
    id: 4,
    total: 59.90,
    items: 2,
    createdAt: new Date(),
  },
  {
    id: 5,
    total: 59.90,
    items: 2,
    createdAt: new Date(),
  },
  {
    id: 6,
    total: 59.90,
    items: 2,
    createdAt: new Date(),
  },
];

const OrdersScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      <Header title="Meus Pedidos" />
      <OrdersScrollView>
        <Orders>
          {orders.map(order => <OrderCard
            key={order.id}
            id={order.id}
            total={order.total}
            items={order.items}
          />)}
        </Orders>
      </OrdersScrollView>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${colors.dark};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

const OrdersScrollView = styled(ScrollView)`
  margin-top: 82px;
`;

const Orders = styled.View`
  padding: 0 ${sizes.space * 3}px;
`;

export default OrdersScreen;
