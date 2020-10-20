import { TemplateResult, html } from 'lit-element'

import '../lib/belle-tag.js'

export default {
  title: 'Tag',
  component: 'belle-tag'
}

export const Default = (): TemplateResult => html`
  <belle-tag>Tag1</belle-tag>
  <belle-tag color="red">Tag2</belle-tag>
  <belle-tag color="blue">Tag3</belle-tag>
`
