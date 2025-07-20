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
}
