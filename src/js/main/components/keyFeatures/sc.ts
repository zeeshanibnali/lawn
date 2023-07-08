import styled from '@emotion/styled'

const KeyFeaturesStyles = {
    Container: styled("div")({
        marginTop: "20vh",
        padding: "2em",
    }),
    Header: styled("h2")({
        textAlign: "center",
    }),
    BlockList: styled("div")({
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "1em",
        justifyContent: "space-around"
    }),
    Block: styled("div")({
        borderRadius: "0.3em",
        padding: "1em",
        maxWidth: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1em",
        // justifyContent:"space-between"
    }),
    BlockHeader: styled("h3")({
        textAlign: "center",
        fontWeight: 600
    }),
    BlockDesc: styled("p")({
    }),

}

export default KeyFeaturesStyles;