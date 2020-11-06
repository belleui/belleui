import { TemplateResult, html } from 'lit-element'
import { select, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'

import '../lib/belle-avatar.js'

export default {
  title: 'Avatar',
  component: 'belle-avatar',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
}

const shape = {
  Circle: 'circle',
  Square: 'square'
}

export const Default = (): TemplateResult => html`
  <belle-avatar shape=${select('Avatar shape', shape, 'circle')}></belle-avatar>
`

export const imgAvatar = (): TemplateResult => html`
  <belle-avatar src="https://avatars0.githubusercontent.com/u/21070775?s=460&u=c736c1e65eae03fdf68b4565fb610d411f86fe7c&v=4"></belle-avatar>
`