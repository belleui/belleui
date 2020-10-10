import { customElement, LitElement, html, TemplateResult } from 'lit-element'
import './app-header'

@customElement('main-page')
export class MainPage extends LitElement {
  render(): TemplateResult {
    return html`
      <app-header></app-header>
      <slot></slot>
    `
  }
}
