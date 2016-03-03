# PostCSS Layout Selector [![Build Status][ci-img]][ci]

[PostCSS] plugin for easy handling of different layouts without media queries but with conditional compilation.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/sebastian-software/postcss-layout-selector.svg
[ci]:      https://travis-ci.org/sebastian-software/postcss-layout-selector

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
