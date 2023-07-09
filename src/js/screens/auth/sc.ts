import styled from '@emotion/styled'

const AuthStyles = {
    Container: styled("div")({
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }),

    SubContainer: styled("div")({
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        padding: "2em"
    }),
    BrandName: styled("h1")({
        margin: "0"
    }),
    TagLine: styled("h4")({
        textTransform: "uppercase",
        fontWeight: 400
    }),
    FormGroup: styled("div")({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "1em"
    }),
    Label: styled("label")({
    }),
    Input: styled("input")({
        marginTop: "1em",
        border: "0px solid black ",
        borderBottom: "2px solid black ",
        outline: "none",
        fontSize: "1.2em",
    }),
    Align: styled("div")({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    }),
    Button: styled("div")({
        padding: "0.1em 1em",
        borderRadius: "0.2em",
        backgroundColor: "#080808",
        ":hover": {
            opacity: "0.8",
            cursor: "pointer"
        }
    }),
    ButtonText: styled("p")({
        color: "#fff"
    }),

    Text: styled("p")({
        alignSelf: "start",
        fontSize: "0.9em"
    }),

}

export default AuthStyles;