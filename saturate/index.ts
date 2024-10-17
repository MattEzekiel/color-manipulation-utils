import Color from "color";
import ensureHexFormat from "../ensureHexFormat";

/**
 * Lightens a color.
 * @param color - The base color in hex format.
 * @param coefficient - The coefficient between 0 and 1 to determine how much to lighten the color.
 * @returns The lightened color in hex format.
 */
function saturate(color: string, coefficient: number): string {
    const c = Color(color).saturate(coefficient).hex();
    return ensureHexFormat(c);
}

export default saturate;
