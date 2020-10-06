import { customElement, LitElement, html, TemplateResult } from 'lit-element'

@customElement('main-page')
export class MainPage extends LitElement {
  render(): TemplateResult {
    return html`
      <slot></slot>
    `
  }
}
