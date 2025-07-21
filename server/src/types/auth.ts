export interface LoginRequest {
  email: string;
  password: string;
}

export interface Session {
  firstName: string;
  lastName: string;
  email: string;
  businessId: string;
  token: string;
  businessName: string;
}

export interface JWTPayload {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  businessName: string;
  businessType: string;
}
