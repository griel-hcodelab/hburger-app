import styled from "styled-components/native";
import { colors, sizes } from "../../utils/variables";
import { TextInputMask } from 'react-native-masked-text';
import { TextInput } from "react-native";

export const InputField = (props: any) => {
  return (
    <Input>
      {props.type
        ? <TextInputMask {...props} />
        : <TextInput {...props} />
      }
    </Input>
  );
};

const Input = styled.View`
  justify-content: center;
  height: 50px;
  margin-bottom: ${sizes.space * 1.5}px;
  padding: 0 ${sizes.space * 2}px;
  border: 1px solid ${colors.gray};
  border-radius: 10px;
`;