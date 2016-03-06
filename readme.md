<img src="assets/postcss.png" alt="PostCSS Logo" width="200" height="200"/>

# PostCSS Layout Selector <br/>![Downloads][npm-version-img] ![Downloads][npm-downloads-img] [![Build Status][ci-img]][ci] ![Dependencies][deps-img] [![Code Climate][climate-img]][climate]

[PostCSS] plugin for easy handling of different layouts without media queries but with conditional compilation.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/sebastian-software/postcss-layout-selector.svg
[ci]:      https://travis-ci.org/sebastian-software/postcss-layout-selector
[deps-img]: https://david-dm.org/sebastian-software/postcss-layout-selector.svg
[climate-img]: https://codeclimate.com/github/sebastian-software/postcss-layout-selector/badges/gpa.svg
[climate]: https://codeclimate.com/github/sebastian-software/postcss-layout-selector
[npm]: https://www.npmjs.com/package/postcss-layout-selector
[npm-downloads-img]: https://img.shields.io/npm/dm/postcss-layout-selector.svg
[npm-version-img]: https://img.shields.io/npm/v/postcss-layout-selector.svg

```css
header {
  background: #eee;

  @layout landscape {
    height: 75px;
  }

  @layout portrait {
    height: 150px;
  }
}
```

Generating "landscape" version:

```css
header {
  background: #eee;
  height: 75px;
}
```

Generating "portrait" version:

```css
header {
  background: #eee;
  height: 150px;
}
```

## Installation

Should be installed locally in your project source code:

```bash
npm install postcss-layout-selector --save-dev
```

## Usage

Integrate like this in your e.g. `gulpfile.js`:

```js
postcss([
  require("postcss-layout-selector")({
    layout: "portrait"
  })
])
```

See [PostCSS] docs for examples for your environment.


## Copyright

<img src="assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2015-2016<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)

