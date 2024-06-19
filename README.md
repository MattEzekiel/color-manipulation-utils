# 🎨 Color Manipulation Utils

This package provides utilities for manipulating colors in JavaScript/TypeScript applications.

## Installation

You can install the package via npm:

````bash
 npm install color-manipulation-utils
````

## Usage

### Darken a Color

Import the `darken` function from `color-manipulation-utils`:

````typescript
import { darken } from 'color-manipulation-utils';
````

Darken a color:

````typescript
const darkenedColor = darken('#7a0f0f', 0.2);
console.log(darkenedColor); // Outputs a darkened color in hex format
````

### Lighten a Color

Import the `lighten` function from `color-manipulation-utils`:

````typescript
import { lighten } from 'color-manipulation-utils';
````
Lighten a color:

````typescript
const lightenedColor = lighten('#068806', 0.2);
console.log(lightenedColor); // Outputs a lightened color in hex format
````

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MattEzekiel/color-manipulation-utils/blob/master/LICENCE.md) file for details.
