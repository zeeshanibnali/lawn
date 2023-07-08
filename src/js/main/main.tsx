import "./main.scss";

import NavBar from "../components/navBar";
import IntroText from "./components/introText";
import Grid from "./components/grid";
import HomeStyles from "./sc";
import useThemeStore, { ThemeStore } from "../stores/themeStore";
import ControlPanel from "./components/controlPanel";
import KeyFeatures from "./components/keyFeatures";
import { useEffect } from "react";

const Main = () => {
  const themeStore: ThemeStore = useThemeStore((state: any) => {
    return state;
  })
  
  return (
    <HomeStyles.Container style={{
      backgroundColor: themeStore.secondary,
      color: themeStore.primary
    }}>
      <NavBar />
      <IntroText />
      <Grid />
      <KeyFeatures />
      <ControlPanel />
    </HomeStyles.Container>
  );
};

export default Main;
