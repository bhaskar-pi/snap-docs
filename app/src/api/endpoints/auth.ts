import type { SignInForm, SignUpForm } from "@custom-types/auth";
import { POST } from "api/requests";

export const signInApi = (data: SignInForm) => {
  return POST("/login", data);
};

export const signUpApi = (data: SignUpForm) => {
  return POST("/register", data);
};
