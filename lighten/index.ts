import Color from "color";
import ensureHexFormat from "../ensureHexFormat";

function lighten(color: string, coefficient: number): string {
    const c = Color(color).lighten(coefficient).hex();
    return ensureHexFormat(c);
}

export default lighten;
