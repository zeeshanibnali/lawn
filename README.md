### Lawn

Introducing, a cutting-edge real-time color generator application that unlocks your creativity and brings a world of vibrant hues to your fingertips. With its intuitive interface and powerful algorithms, Lawn revolutionizes the way you explore, discover, and create captivating color palettes.


### Dev Requirements

- [Node.js](https://nodejs.org/en) 16 or later
- [Yarn](https://yarnpkg.com/getting-started/install) 1.x.x aka classic (ensure by running `yarn set version classic`)

### Compatibility

- [Adobe CC Apps](https://www.adobe.com/creativecloud/desktop-app.html) version 2020 or later
- Windows & Mac Intel
- Mac Arm64 (M1 / M2) require special setup ([more details](#misc-troubleshooting))


## Quick Start

- CD into Directory

`yarn`

- Installs all dependencies

`yarn build`

- Runs initial build
- Creates cep folder structure
- Creates symlink to extensions folder
- Open Adobe Illustrator, you should in the extensions menu: "Lawn"

### Contribute

`yarn dev`

- Runs in dev mode with HMR Hot-reloading.
- Both JS and ExtendScript folders re-build on changes
- Viewable in browser via localhost:3000/panel/
  - (e.g. http://localhost:3000/main/, http://localhost:3000/settings/, etc. (see [Panel Structure](#cep-panel-structure) to set up multiple panels)))

Note: Open the browser with 600 /500 dimensions in order to develop correctly. This app hasn't been created for responsivness right now due to less time. In the future though, it will soon.

`yarn serve`

- Serve files after running `yarn build`
- Viewable in browser via localhost:5000/panel/
  - (e.g. http://localhost:5000/main/, http://localhost:5000/settings/, etc. (see [Panel Structure](#cep-panel-structure) to set up multiple panels)))

`yarn zxp`

- Builds and bundles your project into a zxp for publishing in the `dist/zxp` folder

`yarn zip`

- Bundles your zxp and specified assets to a zip archive in the `dist/zip` folder

---

## Config

Update your CEP build and package settings in `cep.config.ts` safely typed

Start building your app in `src/js/main/index(.tsx or .vue or .svelte)`

Write ExtendScript code in `src/jsx/main.ts`

---