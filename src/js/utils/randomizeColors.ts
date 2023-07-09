import colorSets from "../data/colorSets";

let lastSelectedColorSet: any = null;

const randomizeColors = () => {
  let randomColorSet;

  do {
    randomColorSet = colorSets[Math.floor(Math.random() * colorSets.length)];
  } while (randomColorSet === lastSelectedColorSet);

  lastSelectedColorSet = randomColorSet;

  let primary = randomColorSet.colors[0];
  let secondary = randomColorSet.colors[1];
  let primButton = randomColorSet.colors[2];
  let secButton = randomColorSet.colors[3];
  let accent = randomColorSet.colors[4];

  return {
    primary,
    secondary,
    primButton,
    secButton,
    accent,
  };
};

export default randomizeColors;
