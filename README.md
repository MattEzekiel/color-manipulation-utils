# 🎨 Color Manipulation Utils
This package provides utilities for manipulating colors in JavaScript/TypeScript applications. This package can help you to use a better contrast for a background color and a color text.


<div align="center">

![GitHub Repo stars](https://img.shields.io/github/stars/MattEzekiel/color-manipulation-utils)
![GitHub watchers](https://img.shields.io/github/watchers/MattEzekiel/color-manipulation-utils)
![GitHub forks](https://img.shields.io/github/forks/MattEzekiel/color-manipulation-utils)

![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FMattEzekiel%2Fcolor-manipulation-utils%2Fmaster%2Fpackage.json&query=version&label=version)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license "Go to license section")

[![Made with Node](https://img.shields.io/badge/node-%3D%3E20-20)](https://nodejs.org)
[![Package - Yarn](https://img.shields.io/badge/yarn-%3E%3D1-blue?logo=yarn&logoColor=white)](https://classic.yarnpkg.com)
[![Package - TypeScript](https://img.shields.io/github/package-json/dependency-version/MattEzekiel/color-manipulation-utils/dev/typescript?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript)

[![NPM Package Downloads](https://img.shields.io/npm/dy/color-manipulation-utils)](https://www.npmjs.com/package/color-manipulation-utils)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/MattEzekiel/color-manipulation-utils/total?label=github%20downloads)

![GitHub Issues](https://img.shields.io/github/issues/MattEzekiel/color-manipulation-utils)
![Pull Requests](https://img.shields.io/github/issues-pr/MattEzekiel/color-manipulation-utils)

</div>

## Installation

You can install the package via npm:
### npm
````bash
 npm install color-manipulation-utils
````
### yarn
````bash
 yarn install color-manipulation-utils
````
### pnpm
````bash
 pnpm add color-manipulation-utils
````

## Usage

### Darken a Color

Import the `darken` function from `color-manipulation-utils`:

````typescript
import { darken } from 'color-manipulation-utils';
````
or

````typescript
import darken from 'color-manipulation-utils/darken';
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
Or

````typescript
import lighten from 'color-manipulation-utils/lighten';
````
Lighten a color:

````typescript
const lightenedColor = lighten('#068806', 0.2);
console.log(lightenedColor); // Outputs a lightened color in hex format
````

## Contributing and Issue Tracking
If you're interested in contributing to wa.me-converter or want to report an issue, please check out our [CONTRIBUTING.md](./CONTRIBUTING.md) guide for detailed information on how to get involved.

## Code of conduct
Respect our [CODE OF CONDUCT](./CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MattEzekiel/color-manipulation-utils/blob/master/LICENCE.md) file for details.
