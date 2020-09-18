import { LitElement, html, css } from 'lit-element'
import { navigator } from 'lit-element-router'

import './app-link'

class AppNav extends navigator(LitElement) {

  static styles = css`
    :host {
      display: block;
      width: 100%;
      background: #fff;
      box-shadow: 0 2px 8px #f0f1f2;
    }
    header {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      width: 100%;
      max-width: 1100px;
      height: 60px;
      margin: 0 auto;
    }
  `

  render() {
    return html`
      <header>
        <div class="logo">
          <app-link href="/">Belleui</app-link>
        </div>
        <div class="nav">
          <app-link href="/components">组件</app-link>
        </div>
      </header>
    `
  }

  handleClick(e) {
    e.preventDefault()
    this.navigate(this.href)
  }
}

customElements.define('app-nav', AppNav)

