import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
import "../index.scss";
import Main from "./main";
import useScreenStore, { ScreenStore } from "../stores/screenStore";
import Themes from "../themes/main";
import Register from "../auth/Register";
import Login from "../auth/Login";
import About from "../screens/about";
import useUserStore, { UserStore } from "../stores/userStore";

export let screen: "/" | "themes" = "/";
export const setScreen = (payload: "/" | "themes") => {
  screen = payload;
};

const App = () => {
  const userStore: UserStore = useUserStore((state: any) => {
    return state;
  });
  const screenStore: ScreenStore = useScreenStore((state: any) => {
    return state;
  });
  React.useEffect(() => {
    let user = window.localStorage.getItem("user");
    if (user) {
      userStore.setUser(JSON.parse(user));
      screenStore.setCurrentScreen("home");
    } else {
      screenStore.setCurrentScreen("login");
    }
  }, []);
  switch (screenStore.currentScreen) {
    case "home": {
      return <Main />;
    }
    case "themes": {
      return <Themes />;
    }
    case "about": {
      return <About />;
    }
    case "register": {
      return <Register />;
    }
    case "login": {
      return <Login />;
    }
  }
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
