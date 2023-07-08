import { create } from 'zustand'

export type ScreenStore = {
    currentScreen: "home" | "themes"

    setCurrentScreen: any
}
export type ScreenPayload = {
    currentScreen: "home" | "themes"
}
const useScreenStore = create((set): ScreenStore => ({
    currentScreen: "home",
    setCurrentScreen: (payload: ScreenPayload) => set((state: ScreenStore) => ({ currentScreen: payload })),
}))

export default useScreenStore;