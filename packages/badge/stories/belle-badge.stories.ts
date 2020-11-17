import { TemplateResult, html } from 'lit-element'
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'
import '@belleui/belle-avatar'

import '../lib/belle-badge.js'

export default {
  title: 'Badge',
  component: 'belle-badge',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

export const Default = (): TemplateResult => html`
  <belle-badge count=5>
    <belle-avatar shape="square"></belle-avatar>
  </belle-badge>
`
