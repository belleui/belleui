import { customElement, LitElement, css, html, TemplateResult } from 'lit-element'

@customElement('app-nav')
export class AppNav extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    nav {
      font-weight: bold;
    }
    a {
      text-decoration: none;
      color: #1f1f1f;
    }
    a:hover {
      color: #1681de;
    }
    svg {
      vertical-align: middle;
      position: relative;
      top: -2px;
    }
  `

  render(): TemplateResult {
    return html`
      <nav>
        <a href="">Components</a>
        <a href="https://github.com/belleui/belleui">
          Github
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
        </a>
      </nav>
    `
  }
}