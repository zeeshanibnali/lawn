const getBrightness = (color: any) => {
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

    return l * 100 / 255;
}

export default getBrightness