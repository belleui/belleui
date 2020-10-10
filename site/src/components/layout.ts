import { customElement, LitElement, html, css, TemplateResult } from 'lit-element'

import './side-nav'

@customElement('app-layout')
export class AppLayout extends LitElement {
  static styles = css`
    .wrapper {
      display: flex;
      height: calc(100vh - 58px);
    }
    .sidebar {
      box-sizing: border-box;
      width: 200px;
      height: 100%;
      padding: 20px;
      border-right: 1px solid #e0e0e0;
    }
    .content {
      flex: 1;
      box-sizing: border-box;
      padding: 20px;
    }
  `

  render(): TemplateResult {
    return html`
      <div class="wrapper">
        <div class="sidebar">
          <side-nav></side-nav>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `
  }
}
