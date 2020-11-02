import { TemplateResult, html } from 'lit-element'
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'

import '../lib/belle-tag.js'

export default {
  title: 'Tag',
  component: 'belle-tag',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

export const Default = (): TemplateResult => html`
  <belle-tag>Tag1</belle-tag>
  <belle-tag color="#333">Tag2</belle-tag>
`
