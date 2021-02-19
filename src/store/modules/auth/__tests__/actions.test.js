import * as actions from '../actions';

describe('auth actions', () => {
  test('signInRequest', () => {
    expect(actions.signInRequest()).toMatchSnapshot();
  });

  test('signInSuccess', () => {
    expect(actions.signInSuccess({ token: 'dwijwdji' })).toMatchSnapshot();
  });

  test('signInFailure', () => {
    expect(actions.signInFailure()).toMatchSnapshot();
  });

  test('setEmail', () => {
    expect(actions.setEmail({ email: 'test@example.com' })).toMatchSnapshot();
  });

  test('setErrorEmail', () => {
    expect(
      actions.setErrorEmail({ message: 'Some error message' }),
    ).toMatchSnapshot();
  });

  test('setPassword', () => {
    expect(
      actions.setPassword({ password: 'test@example.com' }),
    ).toMatchSnapshot();
  });

  test('setErrorPassword', () => {
    expect(
      actions.setErrorPassword({ message: 'Some error message' }),
    ).toMatchSnapshot();
  });
});
