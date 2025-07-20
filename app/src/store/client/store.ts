import { create } from "zustand";

interface SendDocumentRequestState {
  isLoading: boolean;
  error?: string;
  setLoading: (value: boolean) => void;
  setError: (error?: string) => void;
}

export const useClientStore = create<SendDocumentRequestState>((set) => ({
  isLoading: false,
  error: undefined,
  setLoading: (value) => set({ isLoading: value }),
  setError: (error) => set({ error }),
}));
