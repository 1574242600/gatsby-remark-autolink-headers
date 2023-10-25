exports.pluginOptionsSchema = ({ Joi }) =>
  Joi.object({
    removeAccents: Joi.boolean().description(
      `Remove accents from generated headings IDs.`
    ),
    enableCustomId: Joi.boolean().description(
      `Enable custom header IDs with \`{#id}\``
    )
  })
