# PostCSS Layout Selector [![Build Status][ci-img]][ci] ![Dependencies][deps-img] ![Downloads][npm-download-img] [![Code Climate][climate-img]][climate]

[PostCSS] plugin for easy handling of different layouts without media queries but with conditional compilation.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/sebastian-software/postcss-layout-selector.svg
[ci]:      https://travis-ci.org/sebastian-software/postcss-layout-selector
[deps-img]: https://david-dm.org/sebastian-software/postcss-layout-selector.svg
[climate-img]: https://codeclimate.com/github/sebastian-software/postcss-layout-selector/badges/gpa.svg
[climate]: https://codeclimate.com/github/sebastian-software/postcss-layout-selector
[npm-download-img]: https://img.shields.io/npm/dt/postcss-layout-selector.svg

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


## Usage

```js
postcss([
  require("postcss-layout-selector")({
    layout: "portrait"
  })
])
```

See [PostCSS] docs for examples for your environment.
