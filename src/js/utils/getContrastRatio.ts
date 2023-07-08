

function parseColor(color: any) {
    const regexRgb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
    const matchRgb = regexRgb.exec(color);
    if (matchRgb) {
        return {
            r: parseInt(matchRgb[1]),
            g: parseInt(matchRgb[2]),
            b: parseInt(matchRgb[3])
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
            b
        };
    }

    throw new Error('Invalid color value: ' + color);
}

function getLuminance(color: any) {
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;
    const luminance = 0.2126 * Math.pow(r, 2.2) + 0.7152 * Math.pow(g, 2.2) + 0.0722 * Math.pow(b, 2.2);
    return luminance;
}


export function getContrastRatio(background: any, foreground: any) {
    const bg = parseColor(background);
    const fg = parseColor(foreground);

    const l1 = getLuminance(bg);
    const l2 = getLuminance(fg);

    if (l1 > l2) {
        return (l1 + 0.05) / (l2 + 0.05);
    } else {
        return (l2 + 0.05) / (l1 + 0.05);
    }
}

