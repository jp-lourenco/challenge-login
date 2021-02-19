import { takeLatest, call, put, all, delay, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import { isInvalidEmail, isInvalidPassword } from '../../../utils/validator';
import * as actions from './actions';

export function* signIn() {
  try {
    const { email, password } = yield select(({ auth }) => auth);
    if (isInvalidEmail(email)) {
      const message = 'Digite um e-mail válido';
      yield put(actions.setErrorEmail({ message }));
      throw new Error(message);
    }
    if (isInvalidPassword(password)) {
      const messageErrorEmail = 'Sua senha deve ter pelo menos 6 caracteres';
      yield put(actions.setErrorPassword({ message: messageErrorEmail }));
      throw new Error(messageErrorEmail);
    }
    const { data } = yield call(api.post, '', { email, password });
    yield delay(500);
    yield put(actions.signInSuccess({ token: data.token }));
    Alert.alert('Sucesso!');
  } catch (err) {
    yield put(actions.signInFailure());
    Alert.alert('Erro!');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
