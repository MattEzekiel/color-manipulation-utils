import ensureHexFormat from "../ensureHexFormat";
import Color from "color";

/**
 * Darkens a color.
 * @param color - The base color in hex format.
 * @param coefficient - The coefficient between 0 and 1 to determine how much to darken the color.
 * @returns The darkened color in hex format.
 */
export function darken(color: string, coefficient: number): string {
    const c = Color(color).darken(coefficient).hex();
    return ensureHexFormat(c);
}

export default darken;
