import { html, TemplateResult } from 'lit-element'

const componentDocs = require.context(
  '../../../packages',
  true,
  /(?<!CHANGELOG)\.md$/
)

export const ComponentDocs = new Map<string, TemplateResult>()

for (const key of componentDocs.keys()) {
  const componentName = key.split('/')[1]

  const templateString = toHtml(componentDocs(key))

  ComponentDocs.set(componentName, templateString)
}

function toHtml(code: string): TemplateResult {
  const stringArray = [`${code}`] as any

  stringArray.raw = [`${code}`]

  return html(stringArray as TemplateStringsArray)
}
