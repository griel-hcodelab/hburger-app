import { useCallback, useState } from "react";
import { ActivityIndicator, Dimensions, ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Header from "../../components/Header";
import PayIcon from "../../components/Icons/PayIcon";
import { InputField } from "../../components/InputField";
import { useApp } from "../../context/App";
import { CarteProvider, useCarte } from "../../context/Carte";
import { colors, sizes } from "../../utils/variables";

const PaymentComponent = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [bank, setBank] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { clearTray } = useCarte();
  const { showToast } = useApp();

  const handlePayment = useCallback(async () => {
    if (!cardNumber) {
      showToast("Preencha o campo Número do Cartão");
      return;
    }
    if (!expiryDate) {
      showToast("Preencha o campo Validade");
      return;
    }
    if (!cvv) {
      showToast("Preencha o campo CVV");
      return;
    }
    if (!name) {
      showToast("Preencha o campo Nome");
      return;
    }
    if (!bank) {
      showToast("Preencha o campo Banco Emissor");
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    
    setIsLoading(false);

    clearTray();

    navigation.navigate("Orders");
  }, [cvv, cardNumber, expiryDate, name, bank]);

  return (
    <ScrollView>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
        <Header title="Pagamento" />
        <Form>
          <FormInputs>
            <InputField
              type="credit-card"
              placeholder="Número do Cartão"
              keyboardType="decimal-pad"
              maxLength={19}
              value={cardNumber}
              onChangeText={(value: string) => setCardNumber(value)}
            />
            <FormRow>
              <FormColumn>
                <InputField
                  placeholder="Validade"
                  keyboardType="decimal-pad"
                  maxLength={5}
                  type="datetime"
                  options={{ format: 'MM/AA' }}
                  value={expiryDate}
                  onChangeText={(value: string) => setExpiryDate(value)}
                />
              </FormColumn>
              <FormColumn>
                <InputField
                  placeholder="CVV"
                  keyboardType="decimal-pad"
                  maxLength={4}
                  value={cvv}
                  onChangeText={(value: string) => setCvv(value)}
                />
              </FormColumn>
            </FormRow>
            <InputField
              placeholder="Nome"
              value={name}
              onChangeText={(value: string) => setName(value)}
            />
            <InputField
              placeholder="Banco Emissor"
              value={bank}
              onChangeText={(value: string) => setBank(value)}
            />
          </FormInputs>
          <FormSubmitButton onPress={handlePayment}>
            {isLoading ?
              <ActivityIndicator
                size="large"
                color={colors.dark}
              />
              : <>
                <PayIcon />
                <FormSubmitButtonText>Pagar Agora</FormSubmitButtonText>
              </>
            }
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
  margin-top: 61px;
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

const PaymentScreen = ({ navigation }: any) => {
  return (
    <CarteProvider>
      <PaymentComponent navigation={navigation} />
    </CarteProvider>
  );
};

export default PaymentScreen;
