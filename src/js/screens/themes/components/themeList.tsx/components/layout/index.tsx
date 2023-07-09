import ThemeListStyles from "../../sc";
import LayoutStyles from "./sc";
import { BiExpandVertical } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { useState } from "react"
import useThemeStore, { ThemeStore } from "../../../../../../stores/themeStore";
const Layout = ({ title, count, colorSets }: any) => {
    const [showData, setShowData] = useState(false)

    const themeStore: ThemeStore = useThemeStore((state: any) => {
        return state;
    })
    return (<LayoutStyles.Container>
        <LayoutStyles.TopAlign>
            <LayoutStyles.Header>
                {title} ({count})
            </LayoutStyles.Header>
            <div onClick={() => { setShowData(!showData) }} style={{ cursor: "pointer" }}>
                <BiExpandVertical />
            </div>
        </LayoutStyles.TopAlign>
        {
            showData ?
                <ThemeListStyles.SubContainer>
                    {
                        colorSets.map((colorSet: any, id: number) => {
                            let current = {
                                primary: colorSet.colors[0],
                                secondary: colorSet.colors[1],
                                primButton: colorSet.colors[2],
                                secButton: colorSet.colors[3],
                                accent: colorSet.colors[4],
                            }
                            let theme = {
                                primary: themeStore.primary,
                                secondary: themeStore.secondary,
                                primButton: themeStore.primButton,
                                secButton: themeStore.secButton,
                                accent: themeStore.accent,
                            }
                            let selected = JSON.stringify(current) === JSON.stringify(theme);
                            return <ThemeListStyles.ThemeBlock onClickCapture={() => {
                                themeStore.setTheme(
                                    current
                                )
                            }}>
                                <ThemeListStyles.ThemeBlockTopContainer>
                                    <p>#{id + 1}</p>
                                    <p>{colorSet?.source}</p>
                                </ThemeListStyles.ThemeBlockTopContainer>
                                <ThemeListStyles.ThemeBlockSubContainer>
                                    <div style={{
                                        position: "absolute",
                                        left: "-10%"
                                    }}>{selected && <BsArrowRight />}</div>
                                    {
                                        colorSet.colors.map((color: string) => {
                                            return <ThemeListStyles.ColorBlock style={{
                                                backgroundColor: color,
                                            }} />
                                        })
                                    }
                                    <div onClick={() => {

                                        var myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/json");

                                        let data = {
                                            id: colorSet.id
                                        }
                                        let raw = JSON.stringify(data);

                                        var requestOptions: any = {
                                            method: "POST",
                                            headers: myHeaders,
                                            body: raw,
                                            redirect: "follow",
                                        };
                                        fetch("http://localhost:4000/themes/delete", requestOptions).then((res) => res.json()).then((data) => {

                                            if (data.message) {
                                                return;
                                            } else {
                                                // Successfully deletd
                                                let x = themeStore.fetchedThemes;
                                                x.splice(id, 1)
                                                themeStore.setTheme({

                                                })
                                            }
                                        })
                                    }} style={{
                                        position: "absolute",
                                        right: "-10%"
                                    }}>{title === "Personal" && <MdDelete style={{
                                        fontSize: "1.5em"
                                    }} />}</div>
                                </ThemeListStyles.ThemeBlockSubContainer>
                            </ThemeListStyles.ThemeBlock>
                        })
                    }
                </ThemeListStyles.SubContainer>
                : null
        }
    </LayoutStyles.Container>)
}
export default Layout;