import { action } from "typesafe-actions";

export interface ISignInActionProps {
  email: string;
  password: string;
}

export function signInRequest({ email, password }: ISignInActionProps) {
  return action("@auth/SIGN_IN_REQUEST", {
    email,
    password,
  });
}

export function signInSuccess({ token }: { token: string }) {
  return action("@auth/SIGN_IN_SUCCESS", {
    token,
  });
}

export function signInFailure() {
  return action("@auth/SIGN_IN_FAILURE");
}
