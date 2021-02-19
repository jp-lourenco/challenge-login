export function signInRequest() {
  return {
    type: '@auth/SIGN_IN_REQUEST',
  };
}

export function signInSuccess({ token }: { token: string | null }) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
    },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function setEmail({ email }: { email: string }) {
  return {
    type: '@auth/SET_EMAIL',
    payload: {
      email,
    },
  };
}

export function setErrorEmail({ message }: { message: string }) {
  return {
    type: '@auth/SET_ERROR_EMAIL',
    payload: {
      message,
    },
  };
}

export function setPassword({ password }: { password: string }) {
  return {
    type: '@auth/SET_PASSWORD',
    payload: {
      password,
    },
  };
}

export function setErrorPassword({ message }: { message: string }) {
  return {
    type: '@auth/SET_ERROR_PASSWORD',
    payload: {
      message,
    },
  };
}
