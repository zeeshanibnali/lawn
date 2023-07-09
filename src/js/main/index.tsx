import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../index.scss";

import Main from "./main";
import { About, Login, Register, Themes } from "../screens";

import useUserStore, { UserStore } from "../stores/userStore";
import useScreenStore, { ScreenStore } from "../stores/screenStore";

const App = () => {
  const userStore: UserStore = useUserStore((state: any) => {
    return state;
  });
  const screenStore: ScreenStore = useScreenStore((state: any) => {
    return state;
  });

  useEffect(() => {
    let user = window.localStorage.getItem("user");
    if (user) {
      userStore.setUser(JSON.parse(user));
      screenStore.setCurrentScreen("home");
    } else {
      screenStore.setCurrentScreen("login");
    }
  }, []);

  switch (screenStore.currentScreen) {
    case "register": {
      return <Register />;
    }
    case "login": {
      return <Login />;
    }
    case "home": {
      return <Main />;
    }
    case "themes": {
      return <Themes />;
    }
    case "about": {
      return <About />;
    }
  }
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
