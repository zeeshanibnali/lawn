import { useEffect, useState } from "react";
import useThemeStore, { ThemeStore } from "../../../../../stores/themeStore";
import ControlPanelStyles from "../../sc";
import getBrightness from "../../../../../utils/getBrightness";
import { getContrastRatio } from "../../../../../utils/getContrastRatio";
import ColorButtonStyles from "./sc";
import { GoCopy } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';



const ColorButton = ({ label, color, backgroundColor, displayText }: any) => {
    const [showInput, setShowInput] = useState(false)
    const [localValue, setLocalValue] = useState(label === "primary" ? color : backgroundColor)

    const themeStore: ThemeStore = useThemeStore((state: any) => {
        return state;
    })


    useEffect(() => {
        setLocalValue(label === "primary" ? color : backgroundColor)
    }, [color, backgroundColor])

    const setTheme = (color: string) => {
        switch (label) {
            case "primary": themeStore.setTheme({
                primary: color
            })
                break;
            case "secondary": themeStore.setTheme({
                secondary: color
            })
                break;
            case "primButton": themeStore.setTheme({
                primButton: color
            })
                break;

            case "secButton": themeStore.setTheme({
                secButton: color
            })
                break;

            case "accent": themeStore.setTheme({
                accent: color
            })
                break;
        }
    }
    return <ControlPanelStyles.Button onClick={() => {
        setShowInput(true)

    }}>
        <ControlPanelStyles.ButttonText style={{
            color: "white"
        }}>{displayText}</ControlPanelStyles.ButttonText>
        <ControlPanelStyles.ButtonColor style={{
            backgroundColor: localValue,
        }} />
        {showInput ?
            <ColorButtonStyles.InputContainer>
                <div
                    onClickCapture={() => {
                        setShowInput(false)
                    }}>
                    <AiOutlineClose style={{
                        position: "absolute",
                        top: 3,
                        right: 3,
                        cursor: "pointer",
                    }}

                    />
                </div>
                <input
                    style={{
                        marginTop: "1em"
                    }}
                    onChange={(e) => {
                        setTheme(e.target.value)
                    }} type="color" id={label} name="favcolor" defaultValue={localValue} />
                <ColorButtonStyles.CopyIcon onClick={() => {
                    // Copy the text inside the text field
                    navigator.clipboard.writeText(localValue);

                }} style={{
                    marginTop: "1em"
                }}>
                    <GoCopy className="copyIcon" style={{ fontSize: "1.5em" }} />
                </ColorButtonStyles.CopyIcon>
            </ColorButtonStyles.InputContainer> : null}
    </ControlPanelStyles.Button>
}

export default ColorButton;