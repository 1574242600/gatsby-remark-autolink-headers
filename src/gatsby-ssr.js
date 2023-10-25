 /*import React from "react"

const pluginDefaults = {
  offsetY: 0,
}

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
 const { offsetY } = Object.assign(
    pluginDefaults,
    pluginOptions
  )

  // This script used to have `let scrollTop` and `let clientTop` instead of
  // current ones which are `var`. It is changed due to incompatibility with
  // older browsers (that do not implement `let`). See:
  //  - https://github.com/gatsbyjs/gatsby/issues/21058
  //  - https://github.com/gatsbyjs/gatsby/pull/21083
  const script = `
    document.addEventListener("DOMContentLoaded", function(event) {
      var hash = window.decodeURI(location.hash.replace('#', ''))
      if (hash !== '') {
        var element = document.getElementById(hash)
        if (element) {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          var clientTop = document.documentElement.clientTop || document.body.clientTop || 0
          var offset = element.getBoundingClientRect().top + scrollTop - clientTop
          // Wait for the browser to finish rendering before scrolling.
          setTimeout((function() {
            window.scrollTo(0, offset - ${offsetY})
          }), 0)
        }
      }
    })
  `

  return setHeadComponents([
    <script
      key={`gatsby-remark-autolink-headers-script`}
      dangerouslySetInnerHTML={{ __html: script }}
    />,
  ])
}*/
