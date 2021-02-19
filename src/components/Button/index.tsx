import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Touchable, Text, LinearGradientButton } from './styles';

interface TouchableProps extends TouchableOpacityProps {
  top: number;
}

const Button: React.FC<TouchableProps> = ({ top, children, ...restProps }) => {
  return (
    <Touchable {...restProps} top={top}>
      <LinearGradientButton
        colors={['#383E71', '#9D25B0']}
        start={{ x: 0.9, y: 0 }}
      >
        <Text>{children}</Text>
      </LinearGradientButton>
    </Touchable>
  );
};

export default Button;
