import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
import "../index.scss";
import Main from "./main";
import useScreenStore, { ScreenStore } from "../stores/screenStore";
import Themes from "../themes/main";
import Register from "../auth/Register";
import Login from "../auth/Login";

export let screen: "/" | "themes" = "/";
export const setScreen = (payload: "/" | "themes") => {
  screen = payload
}

console.log("screens")


const App = () => {
  const screenStore: ScreenStore = useScreenStore((state: any) => {
    return state;
  })
  switch (screenStore.currentScreen) {
    case "home": { return <Main /> }
    case "themes": { return <Themes /> }
    case "register": { return <Register /> }
    case "login": { return <Login /> }
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
