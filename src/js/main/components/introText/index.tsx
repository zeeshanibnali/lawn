import { useEffect, useState } from "react";
import useThemeStore from "../../../stores/themeStore";
import IntroTextStyles from "./sc"

const IntroText = () => {
    const primButton: string = useThemeStore((state: any) => {
        return state.primButton;
    })
    const accent: string = useThemeStore((state: any) => {
        return state.accent;
    })
    const secondary: string = useThemeStore((state: any) => {
        return state.secondary;
    })
    return <IntroTextStyles.Container>
        <IntroTextStyles.Header>
            Visualize Your <span style={{
                background: `linear-gradient(120deg, ${primButton}, ${accent})`,
                color: secondary,
                padding: "0.2em",
                borderRadius: "0.2em"
            }}>Colors</span><br />In Real Time
        </IntroTextStyles.Header>
    </IntroTextStyles.Container>
}

export default IntroText