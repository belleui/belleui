import { TemplateResult, html } from 'lit-element'
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'

import '../lib/belle-card.js'

export default {
  title: 'Card',
  component: 'belle-card',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

export const Default = (): TemplateResult => html`
  <belle-card title="Card" style="width: 200px;">
    <div>
      <p>Card Content</p>
      <p>Card Content</p>
      <p>Card Content</p>
    </div>
  </belle-card>
`
