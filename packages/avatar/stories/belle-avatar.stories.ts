import { TemplateResult, html } from 'lit-element'

import '../lib/belle-avatar.js'

export default {
  title: 'Avatar',
  component: 'belle-avatar'
}

export const Default = (): TemplateResult => html`
  <belle-avatar src="https://avatars0.githubusercontent.com/u/21070775?s=460&u=c736c1e65eae03fdf68b4565fb610d411f86fe7c&v=4"></belle-avatar>
  <belle-avatar shape="square">ABCD</belle-avatar>
`
