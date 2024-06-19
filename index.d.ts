/**
 * Darkens a color.
 * @param color - The base color in hex format.
 * @param coefficient - The coefficient between 0 and 1 to determine how much to darken the color.
 * @returns The darkened color in hex format.
 */
export declare function darken(color: string, coefficient: number): string;

/**
 * Lightens a color.
 * @param color - The base color in hex format.
 * @param coefficient - The coefficient between 0 and 1 to determine how much to lighten the color.
 * @returns The lightened color in hex format.
 */
export declare function lighten(color: string, coefficient: number): string;
