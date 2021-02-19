import { AuthState } from './types';
import { AnyAction } from 'redux';

const initialState: AuthState = {
  loadingSignInRequest: false,
  email: '',
  password: '',
  isSignedIn: false,
  token: null,
  error: false,
  errorEmail: '',
  errorPassword: '',
};

export default function auth(
  state = initialState,
  action: AnyAction,
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
        error: false,
        errorEmail: '',
        errorPassword: '',
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        error: true,
      };
    case '@auth/SET_EMAIL':
      return {
        ...state,
        email: action.payload.email,
      };
    case '@auth/SET_ERROR_EMAIL':
      return {
        ...state,
        errorEmail: action.payload.message,
        errorPassword: '',
      };
    case '@auth/SET_PASSWORD':
      return {
        ...state,
        password: action.payload.password,
      };
    case '@auth/SET_ERROR_PASSWORD':
      return {
        ...state,
        errorPassword: action.payload.message,
        errorEmail: '',
      };
    default:
      return state;
  }
}
