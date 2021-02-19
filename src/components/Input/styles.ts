import styled from 'styled-components/native';
import { TextProps } from 'react-native';

interface InputProps extends TextProps {
  marginTopLabel: number;
}

interface TextInputProps extends TextProps {
  error: boolean;
}

export const TextInput = styled.TextInput<TextInputProps>`
  background-color: #fff;
  width: 256px;
  height: 48px;
  border: 1px solid ${({ error }) => (error === true ? '#FF377F' : '#989fdb')};
  border-radius: 8px;
  padding: 17px;
  font-size: 10px;
`;

export const Label = styled.Text<InputProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #383e71;
  align-self: flex-start;
  padding-left: 38px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTopLabel}px;
`;

export const ErrorLabel = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #ff377f;
  align-self: flex-start;
  padding-left: 38px;
  margin-top: 8px;
`;
