import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { useCarte } from "../../context/Carte";
import { formatCurrency } from "../../utils/formatCurrenty";
import { colors } from "../../utils/variables";
import DeleteIcon from "../Icons/DeleteIcon";
import TrayIcon from "../Icons/TrayIcon";

const Tray = () => {
  const Carte = useCarte();

  return (
    <TrayContainer>
      <TrayHeader>
        <TrayIcon style={{ height: 48, width: 48, marginRight: 16 }} />
        <View>
          <TrayHeaderTitle>Bandeja</TrayHeaderTitle>
          <TrayHeaderCount>{Carte.trayItems.length} hamburguers</TrayHeaderCount>
        </View>
      </TrayHeader>
      { Carte.trayItems.map((item, index) => (
        <TrayItem key={item.id}>
          <TrayItemName>Hamburger {index + 1}</TrayItemName>
          <TrayItemPrice>{formatCurrency(item.subTotal)}</TrayItemPrice>
          <TrayItemButton>
            <DeleteIcon />
          </TrayItemButton>
        </TrayItem>
      ))}
      
    </TrayContainer>
  );
};

const TrayContainer = styled(ScrollView)`
  background-color: ${colors.orange};
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
  padding: 40px 20px 110px 20px;
`;

const TrayHeader = styled.View`
  flex-direction: row;
  margin-bottom: 56px;
  gap: 16px;
`;

const TrayHeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-top: -8px;
`;

const TrayHeaderCount = styled.Text`
  font-size: 24px;
  font-weight: 300;
  margin-top: -6px;
`;

const TrayItem = styled.View`
  flex-direction: row;
  align-items: center;
  border-style: dashed;
  border-bottom-color: ${colors.dark}; 
  border-bottom-width: 1px;
  padding-bottom: 6px;
  margin-bottom: 32px
`;

const TrayItemName = styled.Text`
  font-weight: 500;
  font-size: 16px;
  flex: 1;
`;

const TrayItemPrice = styled.Text`
  font-weight: 500;
  font-size: 16px;
  margin-right: 32px;
`;

const TrayItemButton = styled.TouchableOpacity`
  padding: 0 8px;
`;

export default Tray;
