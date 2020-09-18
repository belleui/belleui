import { LitElement, html } from 'lit-element'
import '@belleui/belle-button'

class ButtonExample extends LitElement {
  render() {
    return html`
      <section>
        <belle-button>Default</belle-button>
        <belle-button type="primary">Primary</belle-button>
        <belle-button type="success">Success</belle-button>
        <belle-button type="danger">Danger</belle-button>
        <belle-button type="warning">Warning</belle-button>
        <belle-button type="dark">Dark</belle-button>
        <belle-button type="light">Light</belle-button>
      </section>
    `
  }
}

customElements.define('button-example', ButtonExample)
