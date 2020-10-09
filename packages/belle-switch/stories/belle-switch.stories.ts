import { TemplateResult, html } from 'lit-element'

import '../lib/belle-switch'

export default {
  title: 'switch',
  component: 'belle-switch'
}

export const Default = (): TemplateResult => html`
  <belle-switch>Switch</belle-switch>
`

export const Disabled = (): TemplateResult => html`
  <belle-switch disabled>Disabled</belle-switch>
`

export const Checked = (): TemplateResult => html`
  <belle-switch checked>Checked</belle-switch>
`
