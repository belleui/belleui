import { TemplateResult, html } from 'lit-element'

import '../lib/index.js'

export default {
  title: 'Select',
  component: 'belle-select'
}

export const Default = (): TemplateResult => html`
  <belle-select name="audi">
    <belle-select-option value="mercedes">Mercedes</belle-select-option>
    <belle-select-option value="audi">Audi</belle-select-option>
  </belle-select>
`
