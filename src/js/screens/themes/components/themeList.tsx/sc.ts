import styled from '@emotion/styled'

const ThemeListStyles = {
    Container: styled("div")({
        width: "80%",
        margin: "0 auto"
    }),
    SubContainer: styled("div")({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1em"
    }),
    ThemeBlock: styled("div")({
        cursor: "pointer",
        "&:hover": {
            opacity: "0.9"
        }
    }),
    ThemeBlockTopContainer: styled("div")({
        display: "flex",
        justifyContent: "space-between",
    }),

    ThemeBlockSubContainer: styled("div")({
        display: "flex",
        position: "relative",
        alignItems: "center",
        gap: "1em",
        marginTop: "1em"
    }),

    ColorBlock: styled("div")({
        backgroundColor: "red",
        width: "4em",
        height: "4em",
        borderRadius: "0.3em",
        border: "1px solid #0000001a",
    }),
}

export default ThemeListStyles;