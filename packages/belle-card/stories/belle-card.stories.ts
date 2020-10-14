import { TemplateResult, html } from 'lit-element'

import '../lib/belle-card.js'

export default {
  title: 'Card',
  component: 'belle-card'
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
