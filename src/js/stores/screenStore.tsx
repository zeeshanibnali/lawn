import { create } from 'zustand'

export type ScreenStore = {
    currentScreen: "home" | "themes" | "login" | "register"

    setCurrentScreen: any
}
export type ScreenPayload = {
    currentScreen: "home" | "themes" | "login" | "register"
}
const useScreenStore = create((set): ScreenStore => ({
    currentScreen: "register",
    setCurrentScreen: (payload: ScreenPayload) => set((state: ScreenStore) => ({ currentScreen: payload })),
}))

export default useScreenStore;