import useThemeStore, { ThemeStore } from "../../../stores/themeStore";
import ColorButton from "./components/colorButton/colorButton";
import ControlPanelStyles from "./sc"
import { TbArrowsRandom, TbDownload } from 'react-icons/tb';

const ControlPanel = () => {
    const themeStore: ThemeStore = useThemeStore((state: any) => {
        return state;
    })

    const {
        primary, secondary, primButton, secButton, accent
    } = themeStore

    return <ControlPanelStyles.Container>
        <ControlPanelStyles.Aligner style={{}}>
            <ColorButton label="primary" color={primary} backgroundColor={secondary} displayText="Text" />
            <ColorButton label="secondary" color={primary} backgroundColor={secondary} displayText="Background" />
        </ControlPanelStyles.Aligner>
        <ControlPanelStyles.Aligner >
            <ColorButton label="primButton" color={primary} backgroundColor={primButton} displayText="Primary Btn" />
            <ColorButton label="secButton" color={primary} backgroundColor={secButton} displayText="Secondary Btn" />
        </ControlPanelStyles.Aligner>
        <ControlPanelStyles.Aligner style={{}}>
            <ColorButton label="accent" color={primary} backgroundColor={accent} displayText="Accent" />
        </ControlPanelStyles.Aligner>
        {/* Export */}
        <ControlPanelStyles.Aligner>
            {/* <ControlPanelStyles.Button onClick={() => {
                themeStore.setRandomTheme()
            }} style={{
                backgroundColor: "white",
                color: "black",
            }}>Export <TbDownload style={{ fontSize: "1.3em", marginLeft: "0.4em" }} /></ControlPanelStyles.Button> */}
            {/* Randomize */}
            <ControlPanelStyles.Button onClick={() => {
                themeStore.setRandomTheme()
            }} style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                flex: 1,
            }}>(Space)<TbArrowsRandom style={{ fontSize: "2em", margin: "0.4em" }} /></ControlPanelStyles.Button>
        </ControlPanelStyles.Aligner>
    </ControlPanelStyles.Container>
}

export default ControlPanel