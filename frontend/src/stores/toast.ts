import { nanoid } from "nanoid";
import { create } from "zustand";

export interface ToastConfig {
    id: string;
    type: "Sucesso" | "Info" | "Erro" | "Aviso" | "Carregando";
    message: string;
}

interface ToastStore {
    toasts: ToastConfig[];
    setToasts: (list: ToastConfig[]) => void;
    addToast: (toast: Pick<ToastConfig, "type" | "message">) => void;
}

export const useToastStore = create<ToastStore>()((set) => ({
    toasts: [],
    setToasts: (list: ToastConfig[]) => set(() => ({ toasts: list })),
    addToast: (toast: Pick<ToastConfig, "type" | "message">) =>
        set((state) => ({
            toasts: [{ id: nanoid(), message: toast.message, type: toast.type }, ...state.toasts],
        })),
}));
