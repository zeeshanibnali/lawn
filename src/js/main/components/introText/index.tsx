import useThemeStore from "../../../stores/themeStore";
import IntroTextStyles from "./sc"

const IntroText = () => {
    const primButton: string = useThemeStore((state: any) => {
        return state.primButton;
    })
    const accent: string = useThemeStore((state: any) => {
        return state.accent;
    })
    return <IntroTextStyles.Container>
        <IntroTextStyles.Header>
            Visualize Your <span style={{
                background: `linear-gradient(120deg, ${primButton}, ${accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>Colors</span><br />In Real Time
        </IntroTextStyles.Header>
    </IntroTextStyles.Container>
}

export default IntroText