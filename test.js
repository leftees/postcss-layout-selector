import test from "ava"
import "babel-register"

import postcss from "postcss"
import plugin from "./"

function run(t, input, output, opts = { }) {
  return postcss([ plugin(opts) ]).process(input)
    .then( result => {
      t.same(result.css, output)
      t.same(result.warnings().length, 0)
    })
}

test("Accepting matching layout", t => {
  return run(t, "@layout landscape{ color: red }", "color: red", {
    layout: "landscape"
  })
})

test("Removing non-matching layout", t => {
  return run(t, "@layout landscape{ color: blue }", "", {
    layout: "portrait"
  })
})
