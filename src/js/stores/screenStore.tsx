import { create } from "zustand";

export type ScreenStore = {
  currentScreen: "home" | "themes" | "login" | "register" | "about";
  setCurrentScreen: any;
};

export type ScreenPayload = {
  currentScreen: "home" | "themes" | "login" | "register" | "about";
};

const useScreenStore = create(
  (set): ScreenStore => ({
    currentScreen: "login",
    setCurrentScreen: (payload: ScreenPayload) =>
      set((state: ScreenStore) => ({ currentScreen: payload })),
  })
);

export default useScreenStore;
