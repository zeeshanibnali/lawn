import colorSets from "../../../stores/colorSets";
import Layout from "./components/layout";
import Auth from "./components/layout/authText";
import ThemeListStyles from "./sc";

let inspired: any = [];
let curated: any = [];
colorSets.map((colorSet) => {
    if (colorSet.source) {
        inspired.push(colorSet)
    } else {
        curated.push(colorSet)
    }
})
const ThemeList = () => {

    return (
        <ThemeListStyles.Container>
            <Layout title="Personal" count={0} colorSets={[]} />
            {
                true &&
                <Auth />

            }
            <Layout title="Inspired" count={inspired.length} colorSets={inspired} />
            <Layout title="Curated" count={curated.length} colorSets={curated} />

        </ThemeListStyles.Container>
    )
}

export default ThemeList;