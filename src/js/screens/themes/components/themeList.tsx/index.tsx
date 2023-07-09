import { useEffect, useState } from "react";
import Layout from "./components/layout";
import Auth from "./components/layout/authText";
import ThemeListStyles from "./sc";
import colorSets from "../../../../data/colorSets";
import useUserStore, { UserStore } from "../../../../stores/userStore";
import useThemeStore, { ThemeStore } from "../../../../stores/themeStore";

let inspired: any = [];
let curated: any = [];
colorSets.map((colorSet) => {
  if (colorSet.source) {
    inspired.push(colorSet);
  } else {
    curated.push(colorSet);
  }
});
const ThemeList = () => {
  const userStore: UserStore = useUserStore((state: any) => {
    return state;
  });
  const themeStore: ThemeStore = useThemeStore((state: any) => {
    return state;
  });
  useEffect(() => {
    if (userStore.id != null) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let data = {
        id: userStore.id,
      };
      let raw = JSON.stringify(data);

      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch("http://localhost:4000/themes", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            return;
          } else {
            let x: any = [];
            for (let i = 0; i < data.length; ++i) {
              x.push({
                colors: [
                  data[i].primary,
                  data[i].secondary,
                  data[i].primButton,
                  data[i].secButton,
                  data[i].accent,
                ],
                id: data[i].id,
              });
            }
            themeStore.setTheme({
              fetchedThemes: x,
            });
            // userStore.setUser({themes: x})
          }
        });
    }
  }, [userStore]);
  return (
    <ThemeListStyles.Container>
      <Layout
        title="Personal"
        count={userStore.id != null ? themeStore.fetchedThemes.length : ""}
        colorSets={themeStore.fetchedThemes}
      />
      {userStore.id == null ? <Auth /> : null}
      <Layout title="Inspired" count={inspired.length} colorSets={inspired} />
      <Layout title="Curated" count={curated.length} colorSets={curated} />
    </ThemeListStyles.Container>
  );
};

export default ThemeList;
