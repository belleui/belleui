import { TemplateResult, html } from 'lit-element'

import '../lib/belle-datepicker.js'

export default {
  title: 'Datepicker',
  component: 'belle-datepicker'
}

export const Default = (): TemplateResult => html`
  <belle-datepicker></belle-datepicker>
`
