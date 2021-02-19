import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Container,
  Form,
  Title,
  SubTitle,
  ImgBackground,
  ColorBackground,
  LinearGradientImage,
  Text,
  FormContainer,
} from './styles';
import {
  signInRequest,
  setEmail,
  setPassword,
} from '../../store/modules/auth/actions';

const BackgroundImage = require('../../assets/img/bg.png');

export const Login: React.FC = () => {
  const { errorEmail, errorPassword, email, password } = useSelector(
    (state: any) => state.auth,
  );

  const dispatch = useDispatch();

  const handleEmailChange = (email: string) => {
    dispatch(setEmail({ email }));
  };

  const handlePasswordChange = (password: string) => {
    dispatch(setPassword({ password }));
  };

  const handleSubmit = () => {
    dispatch(signInRequest());
  };

  return (
    <Container>
      <ImgBackground source={BackgroundImage} resizeMode={'cover'}>
        <StatusBar backgroundColor="transparent" translucent />
        <LinearGradientImage colors={['transparent', '#130525', '#130525']} />
        <ColorBackground />
      </ImgBackground>

      <FormContainer>
        <Form>
          <Title>Olá, seja bem-vindo!</Title>
          <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
          <Input
            label="E-MAIL"
            marginTopLabel={20}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            onChangeText={(email) => handleEmailChange(email)}
            placeholder="user.name@mail.com"
            error={errorEmail}
            value={email}
          />
          <Input
            label="SENHA"
            marginTopLabel={16}
            autoCapitalize="none"
            onChangeText={(password) => handlePasswordChange(password)}
            placeholder="*******"
            value={password}
            secureTextEntry={true}
            textContentType="password"
            error={errorPassword}
          />
        </Form>
        <Button onPress={() => handleSubmit()} top={-24}>
          ENTRAR
        </Button>
        <Text>Esqueceu seu login ou senha? Clique aqui</Text>
      </FormContainer>
    </Container>
  );
};
