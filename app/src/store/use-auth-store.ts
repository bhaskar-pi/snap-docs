import { create } from "zustand";
import type { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import type { Session, SignInForm, SignUpForm } from "@custom-types/auth";
import { signInApi, signUpApi } from "@api/endpoints/auth";
import { getErrorMessage } from "@helpers/validation";
import type { Error } from "@custom-types/misc";
import { storeSession } from "config/storage";

interface AuthState {
  session?: Session;
  error?: string;
  isLoading: boolean;
  signIn: (data: SignInForm, navigate: NavigateFunction) => Promise<void>;
  signUp: (data: SignUpForm, navigate: NavigateFunction) => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  session: undefined,
  isLoading: false,
  error: undefined,
  signIn: async (data, navigate) => {
    set({ isLoading: true });
    try {
      const session = await signInApi(data);
      set({ session, isLoading: false });

      storeSession(session);

      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (error: unknown) {
      const errorMsg =
        getErrorMessage(error as unknown as Error) || "Sign in failed";
      set({ error: errorMsg, isLoading: false });

      toast.error(errorMsg);
      console.error("Failed at singing in", error);
    }
  },
  signUp: async (data, navigate) => {
    set({ isLoading: true });
    try {
      await signUpApi(data);
      set({ isLoading: false });

      toast.success("Account created successfully");
      navigate("/login");
    } catch (error: unknown) {
      const errorMsg =
        getErrorMessage(error as unknown as Error) ||
        "Sign up failed. Please try again";
      set({ error: errorMsg, isLoading: false });
      toast.error(errorMsg);
      console.error("Failed at singing up", error);
    }
  },
}));

export default useAuthStore;
