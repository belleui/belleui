import { LitElement, html, css } from 'lit-element'

class ComponentsPage extends LitElement {
  static styles = css`
    .container {
      display: flex;
      width: 100%;
      height: 100vh;
      max-width: 800px;
      margin: 0 auto;
    }
  `

  render() {
    return html`
      <div class="container">
        <aside>
          <app-link href="/components/button">Button</app-link>
        </aside>
        <aside>
          <section>
            <button-example route="not-found"></button-example>
          </section>
        </aside>
      </div>
    `
  }
}

customElements.define('components-page', ComponentsPage)
