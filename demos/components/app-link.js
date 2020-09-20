import { LitElement, html, css } from 'lit-element'
import { navigator } from 'lit-element-router'
import { changeRoute } from '../utils'

class AppLink extends navigator(LitElement) {

  static styles = css`
    a {
      text-decoration: none;
      color: #007bff;
    }
  `

  static get properties() {
    return {
      href: { type: String }
    }
  }

  constructor() {
    super()
    this.href = ''
  }

  render() {
    return html`
      <a href="${this.href}" @click="${this.handleClick}">
        <slot></slot>
      </a>
    `
  }

  handleClick(e) {
    e.preventDefault()
    this.navigate(changeRoute(this.href))
  }
}

customElements.define('app-link', AppLink)
