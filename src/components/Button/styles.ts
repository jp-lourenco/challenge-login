import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface TouchableProps {
  top: number;
}

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 48px;
  background: transparent;
  border-radius: 8px;
  top: ${(props) => props.top}px;
`;

export const Text = styled.Text`
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const LinearGradientButton = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 168px;
  border-radius: 8px;
`;
