/**
 * Ensures the given color string is in proper hex format.
 * @param color - The color string to ensure proper format.
 * @returns Properly formatted hex color string.
 */
function ensureHexFormat(color: string): string {
    // Remove any extraneous characters and ensure proper length
    const hex = color.replace(/[^0-9a-f]/gi, '').padStart(6, '0');
    return `#${hex}`;
}

export default ensureHexFormat
