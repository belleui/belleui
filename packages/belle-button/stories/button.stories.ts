import { TemplateResult, html } from 'lit-element'

import '@bellui/belle-button'

export default {
  title: 'Button',
  component: 'belle-button'
}

export const Default = (): TemplateResult => html`
  <belle-button>Default</belle-button>
  <belle-button type="primary">Primary</belle-button>
  <belle-button type="success">Success</belle-button>
  <belle-button type="danger">Danger</belle-button>
  <belle-button type="warning">Warning</belle-button>
  <belle-button type="dark">Dark</belle-button>
  <belle-button type="light">Light</belle-button>
`

Default.storyName = 'Default'

export const outline = (): TemplateResult => html`
  <belle-button outline>Default</belle-button>
  <belle-button type="primary" outline>Primary</belle-button>
  <belle-button type="success" outline>Success</belle-button>
`

outline.storyName = 'Outline'

export const disable = (): TemplateResult => html`
  <belle-button type="primary" disabled>Primary</belle-button>
`

disable.storyName = 'Disable'
