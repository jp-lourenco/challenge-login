import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const windowWidth = Math.ceil(Dimensions.get('window').width);
const windowHeight = Math.ceil(Dimensions.get('window').height);
const heightColor = windowHeight - windowWidth;
const topColor = windowHeight - heightColor;
const marginTop = windowHeight / 4;
const topLinear = windowWidth / 5;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ImgBackground = styled.ImageBackground`
  width: ${windowWidth}px;
  height: ${windowWidth}px;
  justify-content: center;
  align-items: center;
`;

export const ColorBackground = styled.View`
  position: absolute;
  justify-content: center;
  align-self: flex-end;
  height: ${heightColor}px;
  width: ${windowWidth}px;
  top: ${topColor}px;
  background: #130525;
`;

export const LinearGradientImage = styled(LinearGradient)`
  position: absolute;
  justify-content: center;
  align-self: flex-end;
  top: ${topLinear}px;
  height: 100%;
  width: 100%;
`;

export const FormContainer = styled.View`
  position: absolute;
  width: 311px;
  align-items: center;
  border-radius: 8px;
`;

export const Form = styled.View`
  position: relative;
  width: 311px;
  background: #faf5ff;
  align-items: center;
  border-radius: 8px;
  padding-bottom: 58px;
  margin-top: ${marginTop}px;
`;

export const Title = styled.Text`
  width: 139px;
  height: 64px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #383e71;
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;
  margin-top: 16px;
`;

export const BackgroundImage = styled.Image`
  flex: 1;
  width: ${windowWidth};
  align-self: center;
  margin: 0;
  padding: 0;
`;

export const Text = styled.Text`
  position: relative;
  width: 212px;
  height: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #fff;
`;
