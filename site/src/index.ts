import { customElement, LitElement, html, css, TemplateResult } from 'lit-element'

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `

  render(): TemplateResult {
    return html`
      <div>
        <h1>fauixxxxx</h1>
      </div>
    `
  }

}
