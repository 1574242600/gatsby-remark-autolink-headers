const toString = require(`mdast-util-to-string`)
const visit = require(`unist-util-visit`)
const slugs = require(`github-slugger`)()
const deburr = require(`lodash/deburr`)

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value
  }

  return context[key]
}

module.exports = (
  { markdownAST }, {
    removeAccents = false,
    enableCustomId = false,
  }
) => {
  slugs.reset()

  visit(markdownAST, `heading`, node => {


    let id
    if (enableCustomId && node.children.length > 0) {
      const last = node.children[node.children.length - 1]
      // This regex matches to preceding spaces and {#custom-id} at the end of a string.
      // Also, checks the text of node won't be empty after the removal of {#custom-id}.
      const match = /^(.*?)\s*\{#([\w-]+)\}$/.exec(toString(last))
      if (match && (match[1] || node.children.length > 1)) {
        id = match[2]
        // Remove the custom ID from the original text.
        if (match[1]) {
          last.value = match[1]
        } else {
          node.children.pop()
        }
      }
    }
    if (!id) {
      const slug = slugs.slug(toString(node))
      id = removeAccents ? deburr(slug) : slug
    }
    const data = patch(node, `data`, {})

    patch(data, `id`, id)
    patch(data, `htmlAttributes`, {})
    patch(data, `hProperties`, {})
    patch(data.htmlAttributes, `id`, id)
    patch(data.hProperties, `id`, id)
  })

  return markdownAST
}
