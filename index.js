"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lighten = exports.darken = void 0;
const color_1 = __importDefault(require("color"));
/**
 * Darkens a color.
 * @param color - The base color in hex format.
 * @param coefficient - The coefficient between 0 and 1 to determine how much to darken the color.
 * @returns The darkened color in hex format.
 */
function darken(color, coefficient) {
    const c = (0, color_1.default)(color).darken(coefficient).hex();
    return ensureHexFormat(c);
}
exports.darken = darken;
/**
 * Lightens a color.
 * @param color - The base color in hex format.
 * @param coefficient - The coefficient between 0 and 1 to determine how much to lighten the color.
 * @returns The lightened color in hex format.
 */
function lighten(color, coefficient) {
    const c = (0, color_1.default)(color).lighten(coefficient).hex();
    return ensureHexFormat(c);
}
exports.lighten = lighten;
/**
 * Ensures the given color string is in proper hex format.
 * @param color - The color string to ensure proper format.
 * @returns Properly formatted hex color string.
 */
function ensureHexFormat(color) {
    // Remove any extraneous characters and ensure proper length
    const hex = color.replace(/[^0-9a-f]/gi, '').padStart(6, '0');
    return `#${hex}`;
}
