import styled from '@emotion/styled'

const NavBarStyles = {
    Container: styled("div")({
        padding: "1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center'
    }),
    Title: styled("h1")({
        color: "black",
        margin: 0,
    }),
    Menu: styled("ul")({
        display: "flex",
        gap: "1em"
    }),
    MenuItem: styled("li")({
        listStyle: "none",
        cursor: "pointer"
    }),

}

export default NavBarStyles;