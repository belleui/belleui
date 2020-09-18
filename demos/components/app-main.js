import { LitElement, html } from 'lit-element'
import { outlet } from 'lit-element-router'

class AppMain extends outlet(LitElement) {
  render() {
    return html`
      <section>
        <slot></slot>
      </section>
    `
  }
}

customElements.define('app-main', AppMain)
