import postcss from "postcss"

function nodesToOptions(rule)
{
  var options = {}

  if (rule.nodes)
  {
    rule.nodes.forEach((child) => {
      options[child.prop] = child.value
    })
  }

  return options
}

export default postcss.plugin("postcss-layout-selector", (pluginOptions) =>
{
  var currentLayout = pluginOptions.layout

  function convert(origin, name, options)
  {
    options = options || {}

    if (name === currentLayout)
    {
      origin.replaceWith(origin.nodes)
    }
    else
    {
      origin.remove()
    }
  }

  return function(css)
  {
    css.walkAtRules("layout", (rule) =>
    {
      var params = postcss.list.space(rule.params)
      var options = nodesToOptions(rule)

      convert(rule, params[0], options)
    })
  }
})
