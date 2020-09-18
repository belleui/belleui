import { LitElement, html, css } from 'lit-element'

class ComponentsPage extends LitElement {
  static styles = css`
    .container {
      display: flex;
      width: 100%;
      height: 100vh;
      max-width: 1100px;
      margin: 0 auto;
    }
  `

  render() {
    return html`
      <div class="container">
        <aside>

        </aside>
      </div>
    `
  }
}

customElements.define('components-page', ComponentsPage)
