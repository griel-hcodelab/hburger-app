import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import Hburger from "../../components/Logo/Hburger";
import { colors, sizes } from "../../utils/variables";

type activeBarTypes = "login" | "register" | "forgot";

export const LoginScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState<activeBarTypes>("login");

  return (
    <ScrollView>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
        <Hburger logoSize={120} />
        <TabsContainer>
          <Tab onPress={() => setActiveTab("login")} active={activeTab === "login"}>
            <TabText>Login</TabText>
          </Tab>
          <Tab onPress={() => setActiveTab("register")} active={activeTab === "register"}>
            <TabText>Cadastro</TabText>
          </Tab>
        </TabsContainer>
        <FormContainer>
          <Form>
            <FormInputContainer>
              {activeTab === "forgot" && <FormForgotLabel>Informe o seu e-mail:</FormForgotLabel>}
              {activeTab === "register" && <FormInput placeholder="Nome" />}
              <FormInput placeholder="E-mail" />
              {activeTab !== "forgot" && <FormInput placeholder="Senha" />}
            </FormInputContainer>
            <FormFooter>
              <TouchableOpacity onPress={() => setActiveTab("forgot")}>
                <FormForgotPasswordButton>Esqueceu a senha?</FormForgotPasswordButton>
              </TouchableOpacity>
              <FormButton onPress={() => navigation.navigate("Carte")}>
                <FormButtonText>Enviar</FormButtonText>
              </FormButton>
            </FormFooter>
          </Form>
        </FormContainer>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  background-color: ${colors.dark};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  justify-content: center;
  align-items: center;
`;

const TabsContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: flex-end;
  margin-top: ${sizes.space * 2}px;
`;

const Tab = styled.TouchableOpacity<{ active: boolean }>`
  background-color: ${({ active }) => active ? colors.orange : `rgba(255, 118, 12, 0.25)`};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 40%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.Text`
  color: ${colors.dark};
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
`;

const FormContainer = styled.View`
  background-color: ${colors.orange};
  width: 80%;
  border-bottom-right-radius: ${sizes.spacePx};
  border-bottom-left-radius: ${sizes.spacePx};
`;

const Form = styled.View`
  padding: ${sizes.space * 2}px;
  padding-bottom: ${sizes.space * 1.6}px;
  padding-top: ${sizes.space * 4}px;
`;

const FormForgotLabel = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 14px;
  margin-top: ${sizes.space * -2}px;
  margin-bottom: 16px;
`;

const FormInputContainer = styled.View`
  flex-direction: column;
`;

const FormInput = styled.TextInput`
  background-color: ${colors.white};
  color: ${colors.dark};
  border-radius: ${sizes.spacePx};
  margin-bottom: ${sizes.space * 2}px;
  height: 50px;
  padding: ${sizes.spacePx};
`;

const FormFooter = styled.View`
  flex-direction: row;
  align-items: flex-end;
  height: 30px;
  position: relative;
`;

const FormButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: -35px;
  background-color: ${colors.dark2};
  height: 48px;
  width: 110px;
  border-radius: ${sizes.spacePx};
`;

const FormButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const FormForgotPasswordButton = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  text-decoration: underline;
`;
