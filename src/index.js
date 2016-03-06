import postcss from "postcss"

export default postcss.plugin("postcss-layout-selector", (pluginOptions = {}) =>
{
  var currentLayout = pluginOptions.layout

  function convert(origin, name)
  {
    if (name === currentLayout)
      origin.replaceWith(origin.nodes)
    else
      origin.remove()
  }

  return function(css)
  {
    css.walkAtRules("layout", (rule) =>
    {
      var params = postcss.list.space(rule.params)

      convert(rule, params[0])
    })
  }
})
