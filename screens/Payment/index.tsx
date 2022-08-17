import { Dimensions, ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Header from "../../components/Header";
import PayIcon from "../../components/Icons/PayIcon";
import { colors, sizes } from "../../utils/variables";

const PaymentScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
        <Header title="Pagamento" />
        <Form>
          <FormInputs>
            <FormInput placeholder="Número do Cartão" />
            <FormRow>
              <FormColumn>
                <FormInput placeholder="Validade" />
              </FormColumn>
              <FormColumn>
                <FormInput placeholder="CVV" />
              </FormColumn>
            </FormRow>
            <FormInput placeholder="Nome" />
            <FormInput placeholder="Banco Emissor" />
          </FormInputs>
          <FormSubmitButton onPress={() => navigation.navigate("Orders")}>
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
  flex: 1;
  margin-top: 51px;
  background-color: ${colors.white};
  position: relative;
`;

const FormRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const FormColumn = styled.View`
  width: 48%;
`;

const FormInputs = styled.View`
  padding: ${sizes.space * 2.6}px;
`;

const FormInput = styled.TextInput`
  height: 50px;
  margin-bottom: ${sizes.space * 1.5}px;
  padding: 0 ${sizes.space * 2}px;
  border: 1px solid ${colors.gray};
  border-radius: 10px;
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
