import "./main.scss";

import NavBar from "../components/navBar";
import IntroText from "./components/introText";
import Grid from "./components/grid";
import HomeStyles from "./sc";
import useThemeStore, { ThemeStore } from "../stores/themeStore";

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
      <div onClick={() => {
        themeStore.setRandomTheme()
      }}>Randomize</div>
      <Grid />
      <IntroText />
    </HomeStyles.Container>
  );
};

export default Main;
