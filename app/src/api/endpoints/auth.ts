import type { Session, SignInForm, SignUpForm } from "@custom-types/auth";
import { POST } from "api/requests";

export const signInApi = (data: SignInForm) => {
  return POST<Session>("/login", data);
};

export const signUpApi = (data: SignUpForm) => {
  return POST<void>("/register", data);
};
