import type { Session } from "@custom-types/auth";
import { AUTH_TOKEN, BUSINESS_SESSION } from "@constants/auth";

export const storeSession = (session: Session) => {
  const { token, ...business } = session;

  localStorage.setItem(AUTH_TOKEN, token);
  localStorage.setItem(BUSINESS_SESSION, JSON.stringify(business));
};

export const getToken = () => localStorage.getItem(AUTH_TOKEN)
export const getBusinessSession = () => localStorage.getItem(BUSINESS_SESSION)

export const clearSession = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(BUSINESS_SESSION);
};

export const getItem = (key: string) => localStorage.getItem(key);
export const removeItem = (key: string) => localStorage.removeItem(key);
