import * as functions from './validator';

describe('Function => isInvalidEmail', () => {
  test('should return true if is invalid email', () => {
    expect(functions.isInvalidEmail('ivalidexample')).toEqual(true);
  });

  test('should return false if is not invalid email', () => {
    expect(functions.isInvalidEmail('test@example.com')).toEqual(false);
  });
});

describe('Function => isInvalidPassword', () => {
  test('should return true if the password has more than 6 letters', () => {
    expect(functions.isInvalidPassword('12345')).toEqual(true);
  });

  test('should return false if the password has not more than 6 letters', () => {
    expect(functions.isInvalidPassword('123456')).toEqual(false);
  });
});
