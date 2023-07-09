import NavBar from "../../components/navBar";
import ControlPanel from "../../main/components/controlPanel";
import useThemeStore, { ThemeStore } from "../../stores/themeStore";
import ThemeList from "./components/themeList.tsx";

const Themes = () => {
  const themeStore: ThemeStore = useThemeStore((state: any) => {
    return state;
  });

  return (
    <div
      style={{
        backgroundColor: themeStore.secondary,
        color: themeStore.primary,
        paddingBottom: "30vh",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <ThemeList />
      <ControlPanel />
    </div>
  );
};

export default Themes;
