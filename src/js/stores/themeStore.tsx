import { create } from 'zustand'
import { randomizeColors } from '../utils/randomColorSet'
export type ThemeStore = {
  primary: string
  secondary: string
  primButton: string
  secButton: string
  accent: string

  setTheme: any
  setRandomTheme: any
}
export type ThemeStorePayload = {
  primary?: string
  secondary?: string
  primButton?: string
  secButton?: string
  accent?: string
}
const useThemeStore = create((set): ThemeStore => ({
  primary: "#1d3557", secondary: "#f1faee", primButton: "#e63946", secButton: "#a8dadc", accent: "#457b9d",
  setTheme: (payload: ThemeStorePayload) => set((state: ThemeStore) => ({ ...state, ...payload })),
  setRandomTheme: () => set((state: ThemeStore) => {
    const data = randomizeColors();
    console.log(data)
    return data;
  }),
}))

export default useThemeStore;