import styled from '@emotion/styled'

const ColorButtonStyles = {
    Container: styled("div")({
    }),
    InputContainer: styled("div")({
        backgroundColor: "white",
        position: "absolute",
        top: -80,
        padding: "1em",
        display: "flex",
        borderRadius: "0.2em",
        gap: "1em",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "between",
        '& > input': {
        }
    }),
    CopyIcon: styled("div")({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #000000aa",
        padding: "0.5em",
        borderRadius: "0.2em",
        '&:hover': {
            border: "1px solid #000000",
            backgroundColor: "black",
            '& > .copyIcon': {
                color: "white"
            }
        }
    }),

}

export default ColorButtonStyles;