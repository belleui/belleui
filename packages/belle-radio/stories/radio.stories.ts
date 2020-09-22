import { TemplateResult, html } from 'lit-element'

import '@belleui/belle-radio'

export default {
  title: 'Radio',
  component: 'belle-radio'
}

export const Default = (): TemplateResult => html`
  <belle-radio>Radio</belle-radio>
`

Default.storyName = 'Default'
