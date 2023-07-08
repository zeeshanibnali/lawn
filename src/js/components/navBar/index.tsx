import { screen, setScreen } from "../../main";
import useScreenStore, { ScreenStore } from "../../stores/screenStore";
import useThemeStore from "../../stores/themeStore";
import NavBarStyles from "./sc"

const NavBar = () => {
    const primary: string = useThemeStore((state: any) => {
        return state.primary;
    })
    const primButton: string = useThemeStore((state: any) => {
        return state.primButton;
    })
    const screenStore: ScreenStore = useScreenStore((state: any) => {
        return state;
    })
    return <NavBarStyles.Container>
        <NavBarStyles.Title style={{
            color: primButton
        }}>Lawn</NavBarStyles.Title>
        <NavBarStyles.Menu>
            <NavBarStyles.MenuItem
                onClick={() => {
                    screenStore.setCurrentScreen("home")
                }}

                style={{
                    color: primary,
                    padding: "0.2em",
                    borderBottom: screenStore.currentScreen === "home" ? `3px solid ${primButton}` : undefined

                }}>
                Home
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem
                onClick={() => {
                    screenStore.setCurrentScreen("themes")
                }}
                style={{
                    color: primary,
                    padding: "0.2em",
                    borderBottom: screenStore.currentScreen === "themes" ? `3px solid ${primButton}` : undefined
                }}>
                Themes
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem
                onClick={() => {
                    screenStore.setCurrentScreen("about")
                }}

                style={{
                    color: primary,
                    padding: "0.2em",
                    borderBottom: screenStore.currentScreen === "themes" ? `3px solid ${primButton}` : undefined
                }}>
                About
            </NavBarStyles.MenuItem>
        </NavBarStyles.Menu>
    </NavBarStyles.Container>
}

export default NavBar