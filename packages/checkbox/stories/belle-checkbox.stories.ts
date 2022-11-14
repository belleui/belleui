import { TemplateResult, html } from 'lit-element'

import '../lib/belle-checkbox.js'

export default {
  title: 'Checkbox',
  component: 'belle-checkbox'
}

export const Default = (): TemplateResult => html`
  <belle-checkbox>香蕉</belle-checkbox>
  <belle-checkbox>苹果</belle-checkbox>
`
