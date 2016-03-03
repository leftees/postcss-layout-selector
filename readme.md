# PostCSS Layout Selector [![Build Status][ci-img]][ci]

[PostCSS] plugin for easy handling of different layouts without media queries.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/swernerx/postcss-layout-selector.svg
[ci]:      https://travis-ci.org/swernerx/postcss-layout-selector

```css
header {
    @layout landscape{
      height: 75px;
    }

    @layout portrait{
      height: 150px;
    }
  }
}
```

Generating "landscape" version:

```css
header {
  height: 75px;
}
```

Generating "portrait" version:

```css
header {
  height: 150px;
}
```


## Usage

```js
postcss([
  require("postcss-layout-selector") ({
    layout: "portrait"
  })
])
```

See [PostCSS] docs for examples for your environment.
