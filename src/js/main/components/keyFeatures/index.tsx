import useThemeStore from "../../../stores/themeStore";
import KeyFeaturesStyles from "./sc"

const KeyFeatures = () => {
    const themeStore = useThemeStore((state: any) => {
        return state;
    })
    const {
        primary, secondary, primButton
    } = themeStore;
    return <KeyFeaturesStyles.Container>
        <KeyFeaturesStyles.Header>
            Why Real Time Colors?
        </KeyFeaturesStyles.Header>
        <KeyFeaturesStyles.BlockList>
            <KeyFeaturesStyles.Block style={{
                backgroundColor: `${primary}10`
            }}>
                <svg width="117" height="117" viewBox="0 0 117 117" fill="none" style={{ height: "50%" }} className="part1-card-img">
                    <circle cx="58.5" cy="58.5" r="58.5" fill={secondary} />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M89.4669 8.85912L58.0465 63.9419L2.44746 41.7023C9.66585 17.5806 32.0298 0 58.5 0C69.872 0 80.4861 3.24483 89.4669 8.85912Z" fill={primButton} fill-opacity="0.6" />
                    <path d="M81.5 22.5L57.1395 64.8489L32 53.5" stroke={primary} stroke-width="7.25581" />
                </svg>
                <KeyFeaturesStyles.BlockHeader>
                    Saves time
                </KeyFeaturesStyles.BlockHeader>
                <KeyFeaturesStyles.BlockDesc>No need to spend hours implementing different variations of colors. Decide right away!</KeyFeaturesStyles.BlockDesc>
            </KeyFeaturesStyles.Block>

            <KeyFeaturesStyles.Block style={{
                backgroundColor: `${primary}10`
            }}>
                <svg style={{ height: "50%",  }} width="112" height="114" viewBox="0 0 112 114" fill="none" >
                    <rect width="58" height="58" fill={secondary} />
                    <rect x="69" y="25" width="33" height="33" fill={primButton} fill-opacity="0.6" />
                    <rect x="69" y="71" width="43" height="43" fill={primary} fill-opacity="0.2" />
                    <rect x="20" y="70" width="38" height="39" fill={primary} />
                </svg>
                <KeyFeaturesStyles.BlockHeader>
                    It's Realistic
                </KeyFeaturesStyles.BlockHeader>
                <KeyFeaturesStyles.BlockDesc>
                    Color Palettes make it hard to pick. This tool distributes the colors on a real website.
                </KeyFeaturesStyles.BlockDesc>

            </KeyFeaturesStyles.Block>

            <KeyFeaturesStyles.Block style={{
                backgroundColor: `${primary}10`
            }}>
                <svg style={{ height: "50%" }} width="179" height="89" viewBox="0 0 179 89" fill="none" >
                    <rect y="26" width="154" height="63" fill={primButton} fill-opacity="0.6" />
                    <path d="M142 15.5V0" stroke={primary} stroke-width="8" />
                    <path d="M163 34L178.5 34" stroke={primary} stroke-width="8" />
                    <path d="M158 19.5L170.5 7" stroke={primary} stroke-width="8" />
                    <path d="M63 54L74.5 65L95.5 44" stroke={primary} stroke-width="8" />
                </svg>
                <KeyFeaturesStyles.BlockHeader>
                    It's simple
                </KeyFeaturesStyles.BlockHeader>
                <KeyFeaturesStyles.BlockDesc>
                    Push a few buttons, and there you have it! Your very own branding colors, ready to export.

                </KeyFeaturesStyles.BlockDesc>
            </KeyFeaturesStyles.Block>
        </KeyFeaturesStyles.BlockList>
    </KeyFeaturesStyles.Container >
}

export default KeyFeatures