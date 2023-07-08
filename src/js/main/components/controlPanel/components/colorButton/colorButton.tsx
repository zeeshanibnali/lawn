import { useEffect, useState } from "react";
import useThemeStore, { ThemeStore } from "../../../../../stores/themeStore";
import ControlPanelStyles from "../../sc";
import getBrightness from "../../../../../utils/getBrightness";
import { getContrastRatio } from "../../../../../utils/getContrastRatio";

const ColorButton = ({ label, color, backgroundColor, displayText }: any) => {
    const themeStore: ThemeStore = useThemeStore((state: any) => {
        return state;
    })
    const [localColor, setLocalColor] = useState(color)
    useEffect(() => {
        setLocalColor(color)
        if (label === "primary" || label === "secondary") {
            return;
        }
        const primaryBrightness = getBrightness(color)
        const secondaryBrightness = getBrightness(backgroundColor)

        const contrastRatio = getContrastRatio(color, backgroundColor);

        if (primaryBrightness < secondaryBrightness) {
            if (contrastRatio < 4.5) {
                setLocalColor(color)
            }
            else if (contrastRatio > 4.5) {
                setLocalColor(backgroundColor)
            }
        }

        if (primaryBrightness > secondaryBrightness) {
            if (contrastRatio < 4.5) {
                setLocalColor(color)
            }
            else if (contrastRatio > 4.5) {
                setLocalColor(backgroundColor)
            }
        }

    }, [color, backgroundColor, label])

    return <ControlPanelStyles.Button onClick={() => {
    }} style={{
        // backgroundColor: backgroundColor,
    }}>
        <ControlPanelStyles.ButttonText style={{
            color: "white"
        }}>{displayText}</ControlPanelStyles.ButttonText>
        <ControlPanelStyles.ButtonColor style={{
            backgroundColor: label === "primary" ? color : backgroundColor,
        }}></ControlPanelStyles.ButtonColor>
    </ControlPanelStyles.Button>
}

export default ColorButton;