import styled from '@emotion/styled'

const ControlPanelStyles = {
    Container: styled("div")({
        display: "flex",
        padding: "1em",
        gap: "0.3em",
        justifyContent: "space-evenly",
        backgroundColor: "#000000",
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: "auto"
    }),

    Aligner: styled("div")({
        display: "flex",
        gap: "0.3em",
        flexDirection: "column",
    }),

    Button: styled("div")({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5em",
        flex: 1,
        padding: "0.7em",
        border: "1px solid #00000011",
        cursor: "pointer",
        borderRadius: "0.3em",
        ':hover': {
            opacity: 0.9
        }
    }),

    ButttonText: styled("div")({
        fontSize: "1em",
    }),

    ButtonColor: styled("div")({
        width: "100%",
        height: "1em",
        borderRadius: "0.3em"
    }),
}

export default ControlPanelStyles;