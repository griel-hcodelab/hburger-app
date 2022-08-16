import { Dimensions, ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Header from "../../components/Header";
import PayIcon from "../../components/Icons/PayIcon";
import { colors, sizes } from "../../utils/variables";

const PaymentScreen = () => {
  return (
    <ScrollView>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
        <Header title="Pagamento" />
        <Form>
          <FormSubmitButton>
            <PayIcon />
            <FormSubmitButtonText>Pagar Agora</FormSubmitButtonText>
          </FormSubmitButton>
        </Form>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  background-color: ${colors.dark};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

const Form = styled.View`
  background-color: ${colors.white};
  flex: 1;
  padding: ${sizes.space * 2.6}px;
  position: relative;
`;

const FormSubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.orange};
  position: absolute;
  bottom: 0;
`;

const FormSubmitButtonText = styled.Text`
  color: ${colors.dark3};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;

export default PaymentScreen;
