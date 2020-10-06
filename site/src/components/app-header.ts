import { customElement, LitElement, css, html, TemplateResult } from 'lit-element'
import './app-nav'

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid #e0e0e0;
    }
    .title {
      margin: 0;
    }
  `

  render(): TemplateResult {
    return html`
      <header>
        <h1 class="title">Belleui</h1>
        <app-nav></app-nav>
      </header>
    `
  }
}
