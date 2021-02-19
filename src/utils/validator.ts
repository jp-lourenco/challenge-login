export function isInvalidEmail(email: string) {
  const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !validEmailRegex.test(email);
}

export function isInvalidPassword(password: string) {
  if (password.length < 6) {
    return true;
  }
  return false;
}
