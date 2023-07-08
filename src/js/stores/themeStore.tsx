import { create } from 'zustand'
export type ThemeStore = {
  primary: string
  secondary: string
  primButton: string
  secButton: string
  accent: string

  setTheme: any
}
export type ThemeStorePayload = {
  primary?: string
  secondary?: string
  primButton?: string
  secButton?: string
  accent?: string
}
const useThemeStore = create((set): ThemeStore => ({
  primary: "#ededed",
  secondary: "#222546",
  primButton: "#29658a",
  secButton: "#474866",
  accent: "#d1d2d6",
  setTheme: (payload: ThemeStorePayload) => set((state: ThemeStore) => ({ ...state, ...payload })),
}))

export default useThemeStore;