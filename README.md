# 🎨 Color Manipulation Utils

This package provides utilities for manipulating colors in JavaScript/TypeScript applications.

## Installation

You can install the package via npm:

<code>npm install color-manipulation-utils</code>

## Usage

### Darken a Color

Import the `darken` function from `color-manipulation-utils`:

<code>import { darken } from 'color-manipulation-utils';</code>

Darken a color:

<code>
const darkenedColor = darken('#7a0f0f', 0.2);
console.log(darkenedColor); // Outputs a darkened color in hex format
</code>

### Lighten a Color

Import the `lighten` function from `color-manipulation-utils`:

<code>import { lighten } from 'color-manipulation-utils';</code>

Lighten a color:

<code>
const lightenedColor = lighten('#068806', 0.2);
console.log(lightenedColor); // Outputs a lightened color in hex format
</code>

## License

This project is licensed under the MIT License - see the LICENSE file for details.
