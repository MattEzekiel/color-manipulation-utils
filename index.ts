import Color from 'color';
import ensureHexFormat from "./ensureHexFormat";

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

/**
 * Lightens a color.
 * @param color - The base color in hex format.
 * @param coefficient - The coefficient between 0 and 1 to determine how much to lighten the color.
 * @returns The lightened color in hex format.
 */
export function lighten(color: string, coefficient: number): string {
    const c = Color(color).lighten(coefficient).hex();
    return ensureHexFormat(c);
}
