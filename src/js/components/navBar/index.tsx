import useThemeStore from "../../stores/themeStore";
import NavBarStyles from "./sc"

const NavBar = () => {
    const primary: string = useThemeStore((state: any) => {
        return state.primary;
    })
    return <NavBarStyles.Container>
        <NavBarStyles.Title style={{
            color: primary
        }}>Lawn</NavBarStyles.Title>
        <NavBarStyles.Menu>
            <NavBarStyles.MenuItem style={{
                color: primary
            }}>
                Home
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem style={{
                color: primary
            }}>
                Themes
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem style={{
                color: primary
            }}>
                About
            </NavBarStyles.MenuItem>
        </NavBarStyles.Menu>
    </NavBarStyles.Container>
}

export default NavBar