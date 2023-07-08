import { create } from 'zustand'

export type UserStore = {
    id: number | null
    email: string | null
    name: string | null

    themes: any
    setUser: any
}
export type UserPayload = {
    id: number | null
    email: string | null
    name: string | null
}
const useUserStore = create((set): UserStore => ({
    id: null,
    email: null,
    name: null,
    themes: [],
    
    setUser: (payload: UserPayload) => set((state: UserStore) => ({ ...state, ...payload })),
}))

export default useUserStore;