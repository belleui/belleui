import { TemplateResult, html } from 'lit-element'

import '../lib/belle-loading.js'

export default {
  title: 'Loading',
  component: 'belle-loading'
}

export const Default = (): TemplateResult => html`
  <belle-loading></belle-loading>
`
