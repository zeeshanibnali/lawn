import NavBarStyles from "./sc"

const NavBar = () => {
    return <NavBarStyles.Container>
        <NavBarStyles.Title>Lawn</NavBarStyles.Title>
        <NavBarStyles.Menu>
            <NavBarStyles.MenuItem>
                Home
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem>
                Themes
            </NavBarStyles.MenuItem>
            <NavBarStyles.MenuItem>
                About
            </NavBarStyles.MenuItem>
        </NavBarStyles.Menu>
    </NavBarStyles.Container>
}

export default NavBar