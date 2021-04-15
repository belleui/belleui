import { TemplateResult, html } from 'lit-element'
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'

import '../lib/belle-spin.js'

export default {
  title: 'Spin',
  component: 'belle-spin',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

export const Spin = (): TemplateResult => html`
  <belle-spin></belle-spin>
`
