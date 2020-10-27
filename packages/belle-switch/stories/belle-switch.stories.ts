import { TemplateResult, html } from 'lit-element'
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'

import '../lib/belle-switch.js'

export default {
  title: 'switch',
  component: 'belle-switch',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

export const Default = (): TemplateResult => html`
  <belle-switch>Switch</belle-switch>
`
