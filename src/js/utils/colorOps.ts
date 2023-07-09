export const getBrightness = (color: any) => {
  let hex = color;

  if (color.substring(0, 3) === "rgb") {
    const [r, g, b] = color.match(/\d+/g);
    hex = "#" + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
  }

  if (hex === "#000000") return 0;
  if (hex === "#FFFFFF") return 100;

  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  return (l * 100) / 255;
};

export const parseColor = (color: any) => {
  const regexRgb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const matchRgb = regexRgb.exec(color);
  if (matchRgb) {
    return {
      r: parseInt(matchRgb[1]),
      g: parseInt(matchRgb[2]),
      b: parseInt(matchRgb[3]),
    };
  }

  const regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const matchHex = regexHex.exec(color);
  if (matchHex) {
    const hex = matchHex[1];
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return {
      r,
      g,
      b,
    };
  }

  throw new Error("Invalid color value: " + color);
};

export const getLuminance = (color: any) => {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;
  const luminance =
    0.2126 * Math.pow(r, 2.2) +
    0.7152 * Math.pow(g, 2.2) +
    0.0722 * Math.pow(b, 2.2);
  return luminance;
};

export const getContrastRatio = (background: any, foreground: any) => {
  const bg = parseColor(background);
  const fg = parseColor(foreground);

  const l1 = getLuminance(bg);
  const l2 = getLuminance(fg);

  if (l1 > l2) {
    return (l1 + 0.05) / (l2 + 0.05);
  } else {
    return (l2 + 0.05) / (l1 + 0.05);
  }
};
