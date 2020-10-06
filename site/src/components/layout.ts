import { customElement, LitElement, html, TemplateResult } from 'lit-element'

import './app-header'

@customElement('app-layout')
export class AppLayout extends LitElement {
  render(): TemplateResult {
    return html`
      <app-header></app-header>
      <div>
        <h1>layout</h1>
        <slot></slot>
      </div>
    `
  }
}
