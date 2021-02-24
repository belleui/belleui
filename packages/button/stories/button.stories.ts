import { TemplateResult, html } from 'lit-element'
import { select, action, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'

import '../lib/belle-button.js'

export default {
  title: 'Button',
  component: 'belle-button',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

const types = {
  Default: 'default',
  Primary: 'primary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Light: 'ligth',
  Dark: 'dark'
}

export const basicButton = (): TemplateResult => html`
  <belle-button
    type=${select('Button type', types, 'primary')}
    @click=${action('click')}
  >Primary</belle-button>
`
export const lodingButton = (): TemplateResult => html`
  <belle-button type="primary" loading>Loading</belle-button>
`
