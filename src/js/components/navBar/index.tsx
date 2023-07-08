import { screen, setScreen } from "../../main";
import useScreenStore, { ScreenStore } from "../../stores/screenStore";
import useThemeStore from "../../stores/themeStore";
import NavBarStyles from "./sc"

const NavBar = () => {
    const primary: string = useThemeStore((state: any) => {
        return state.primary;
    })
    const screenStore: ScreenStore = useScreenStore((state: any) => {
        return state;
    })
    return <NavBarStyles.Container>
        <NavBarStyles.Title style={{
            color: primary
        }}>Lawn</NavBarStyles.Title>
        <NavBarStyles.Menu>
            <NavBarStyles.MenuItem
                onClick={() => {
                    screenStore.setCurrentScreen("home")
                }}

                style={{
                    color: primary,
                }}>
                Home
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem
                onClick={() => {
                    screenStore.setCurrentScreen("themes")
                }}
                style={{
                    color: primary
                }}>
                Themes
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem
                onClick={() => {
                    screenStore.setCurrentScreen("about")
                }}

                style={{
                    color: primary
                }}>
                About
            </NavBarStyles.MenuItem>
        </NavBarStyles.Menu>
    </NavBarStyles.Container>
}

export default NavBar