import { useEffect } from "react";
import useThemeStore, { ThemeStore } from "../../../stores/themeStore";
import ColorButton from "./components/colorButton/colorButton";
import ControlPanelStyles from "./sc"
import { TbArrowsRandom, TbDownload } from 'react-icons/tb';
import { VscSymbolColor } from 'react-icons/vsc';
import useUserStore, { UserStore } from "../../../stores/userStore";


const ControlPanel = () => {
    const themeStore: ThemeStore = useThemeStore((state: any) => {
        return state;
    })

    const userStore: UserStore = useUserStore((state: any) => {
        return state;
    })
    const {
        primary, secondary, primButton, secButton, accent
    } = themeStore


    useEffect(() => {
        document.addEventListener('keydown', event => {
            if (event.code === 'Space') {
                event.preventDefault();
                themeStore.setRandomTheme()
            }
        });


    }, [])
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
            <ControlPanelStyles.Button onClick={() => {

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                let data = {
                    id: userStore.id,
                    primary: themeStore.primary,
                    secondary: themeStore.secondary,
                    primButton: themeStore.primButton,
                    secButton: themeStore.secButton,
                    accent: themeStore.accent,
                }
                let raw = JSON.stringify(data);

                var requestOptions: any = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };
                fetch("http://localhost:4000/themes/add", requestOptions).then((res) => res.json()).then((data) => {
                    console.log(data)
                    if (data.message) {
                        return;
                    } else {
                        let x = themeStore.fetchedThemes;
                        x.push({
                            colors: [primary, secondary, primButton, secButton, accent],
                            id: data.id
                        })
                        themeStore.setTheme({
                            fetchedThemes: x
                        })
                    }
                })
            }} style={{
                backgroundColor: "white",
                color: "black",
            }}>Add Theme <VscSymbolColor style={{ fontSize: "1.3em", marginLeft: "0.4em" }} /></ControlPanelStyles.Button>

        </ControlPanelStyles.Aligner>
        {/* Export */}
        <ControlPanelStyles.Aligner>
            {/* {/* Randomize */}
            <ControlPanelStyles.Button onClick={() => {
                themeStore.setRandomTheme()
            }} style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                flex: 1,
            }}>(Press Spacebar)<TbArrowsRandom style={{ fontSize: "2em", margin: "0.4em" }} /></ControlPanelStyles.Button>
        </ControlPanelStyles.Aligner>
    </ControlPanelStyles.Container>
}

export default ControlPanel