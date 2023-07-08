import useThemeStore, { ThemeStore } from "../../../stores/themeStore";
import GridStyles from "./sc"
// SVG code taken is from https://realtimecolors.com/


// colors: ['#ededed', '#222546', '#29658a', '#474866', '#d1d2d6'],

const Grid = () => {
    const themeStore: ThemeStore = useThemeStore((state: any) => {
        return state;
    })
    const {
        primary, secondary, primButton, secButton, accent
    } = themeStore

    return <GridStyles.Container className="grid">
        <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="644" viewBox="0 0 652 644" fill="none" style={{
            height: 'auto',
        }}>
            <rect rx="10" ry="10" x="4.69366" y="4" width="643.306" height="636" stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="5" y="4" width="154.827" height="67.282" fill={secButton} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="411" y="4" width="202" height="67" fill={accent} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="411" y="72" width="202" height="167" fill={accent} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="411" y="405" width="202" height="84" fill={secondary} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="241" y="615" width="372" height="25" fill={secondary} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="76" y="569" width="166" height="71" fill={secondary} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="242" y="570" width="169" height="45" fill={primary} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="242" y="489" width="169" height="81" fill={secButton} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="242" y="404" width="169" height="85" fill={secButton} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="75" y="72" width="336" height="333" fill={primButton} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="76" y="405" width="166" height="165" fill={primary} stroke={secondary} stroke-width="8" />
            {/* Opacity check */}
            <rect rx="10" ry="10" opacity="1" x="411" y="489" width="202" height="126" fill={accent} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="613" y="489" width="35" height="151" fill={primButton} stroke={secondary} stroke-width="8" />
            {/* Creates some  problem */}
            {/* <rect rx="10" ry="10" x="411" y="238" width="103" height="167" fill={secondary} stroke={secondary} stroke-width="8" /> */}
            {/* <rect rx="10" ry="10" x="514" y="238" width="99" height="167" fill={secondary} stroke={secondary} stroke-width="8" /> */}

            <rect rx="10" ry="10" x="613.206" y="4" width="34.7942" height="484.655" fill={secondary} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="159.827" y="4" width="250.853" height="67.1507" fill={secondary} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="5" y="72" width="71" height="167" fill={secondary} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="5" y="238" width="71" height="251" fill={secButton} stroke={secondary} stroke-width="8" />
            <rect rx="10" ry="10" x="4.69366" y="487.261" width="71.3258" height="152.739" fill={accent} stroke={secondary} stroke-width="8" />
        </svg>
    </GridStyles.Container>
}

export default Grid