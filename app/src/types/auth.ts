import type { BusinessType } from "@enums/business";

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  businessType: BusinessType;
  logo?: string;
}

export interface Session {
  firstName: string;
  lastName: string;
  email: string;
  businessId: string;
  token: string;
}
