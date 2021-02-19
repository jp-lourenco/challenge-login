export interface AuthState {
  email: string;
  password: string;
  loadingSignInRequest: boolean;
  isSignedIn: boolean;
  token: string | null;
  error: boolean;
  errorEmail: string;
  errorPassword: string;
}
