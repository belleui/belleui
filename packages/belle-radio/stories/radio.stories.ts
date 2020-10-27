import { TemplateResult, html } from 'lit-element'
import { action, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'

import '../lib/index'

export default {
  title: 'Radio',
  component: 'belle-radio',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

export const Default = (): TemplateResult => html`
  <belle-radio>Radio</belle-radio>
`

export const checked = (): TemplateResult => html`
  <belle-radio checked>Radio</belle-radio>
`

export const Disabled = (): TemplateResult => html`
  <belle-radio disabled>Radio</belle-radio>
`

export const group = (): TemplateResult => html`
  <belle-radio-group selected="radio1" @on-change=${handleChange}>
    <belle-radio value="radio1">Radio1</belle-radio>
    <belle-radio value="radio2">Radio2</belle-radio>
    <belle-radio value="radio3">Radio3</belle-radio>
  </belle-radio-group>
`

function handleChange(event: Event & { detail: { value: string } }): void {
  const detail = event.detail
  action(`Checked: ${detail.value}`)
}

group.story = {
  name: 'Group'
}
