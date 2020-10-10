import { customElement, LitElement, html, TemplateResult } from 'lit-element'

@customElement('side-nav')
export class SideNav extends LitElement {
  render(): TemplateResult {
    return html`
      <div>
        <ul>
          <li>
            <a href="/components/button">Button</a>
          </li>
        </ul>
      </div>
    `
  }
}