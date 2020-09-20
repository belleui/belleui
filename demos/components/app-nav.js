import { LitElement, html, css } from 'lit-element'
import { navigator } from 'lit-element-router'

import './app-link'

class AppNav extends navigator(LitElement) {

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    header {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      position: sticky;
      top: 0;
      width: 100%;
      max-width: 800px;
      height: 60px;
      margin: 0 auto;
    }
    h1 {
      margin-right: 10px;
      font-size: 20px;
    }
    a {
      text-decoration: none;
      color: #007bff;
    }
  `

  render() {
    return html`
      <header>
        <div class="logo">
          <h1>
            <app-link href="">Belleui</app-link>
          </h1>
        </div>
        <div class="nav">
          <app-link href="/components">组件</app-link>
          <a href="https://github.com/belleui/belleui">github</a>
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

