import { AiFillGithub } from "react-icons/ai";
import NavBar from "../../components/navBar";
import useThemeStore, { ThemeStore } from "../../stores/themeStore";
import AboutStyles from "./sc";
import ControlPanel from "../../main/components/controlPanel";

const About = () => {
  
  const themeStore: ThemeStore = useThemeStore((state: any) => {
    return state;
  });

  return (
    <AboutStyles.Container
      style={{
        backgroundColor: themeStore.secondary,
        color: themeStore.primary,
      }}
    >
      <NavBar />
      <AboutStyles.SubContainer>
        <AboutStyles.Desc>
          Introducing{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Lawn
          </span>
          , a cutting-edge real-time color generator application that unlocks
          your creativity and brings a world of vibrant hues to your fingertips.
          With its intuitive interface and powerful algorithms,{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Lawn{" "}
          </span>
          revolutionizes the way you explore, discover, and create captivating
          color palettes.
        </AboutStyles.Desc>
        <AiFillGithub
          style={{
            fontSize: "3em",
            marginTop: "1em",
            marginBottom: "0.2em",
          }}
        />
        <AboutStyles.Desc>zeeshanibnali/lawn</AboutStyles.Desc>
        <ControlPanel />
      </AboutStyles.SubContainer>
    </AboutStyles.Container>
  );
};

export default About;
