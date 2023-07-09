import { create } from "zustand";

export type UserStore = {
  id: number | null;
  email: string | null;
  name: string | null;

  themes: any;
  setUser: any;
  logOut: any;
};
export type UserPayload = {
  id: number | null;
  email: string | null;
  name: string | null;
  themes: any;
};
const useUserStore = create(
  (set): UserStore => ({
    id: null,
    email: null,
    name: null,
    themes: [],

    setUser: (payload: UserPayload) =>
      set((state: UserStore) => {
        window.localStorage.setItem("user", JSON.stringify(payload));
        return { ...state, ...payload };
      }),

    logOut: (payload: UserPayload) =>
      set((state: UserStore) => {
        window.localStorage.removeItem("user");

        return { id: null, email: null, themes: [] };
      }),
  })
);

export default useUserStore;
