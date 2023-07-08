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
  primary: "#344e41", secondary: "#dad7cd", primButton: "#3a5a40", secButton: "#b5c49c", accent: "#588157",
  setTheme: (payload: ThemeStorePayload) => set((state: ThemeStore) => ({ ...state, ...payload })),
  setRandomTheme: () => set((state: ThemeStore) => {
    const data = randomizeColors();
    console.log(data)
    return data;
  }),
}))

export default useThemeStore;