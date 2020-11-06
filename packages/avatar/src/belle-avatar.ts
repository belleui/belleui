import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'

import style from './belle-avatar-css'

type Shape = 'circle' | 'square'

/**
 * @element belle-avatar
 * @cssprop [--background-color=#ccc] The default background color
 * @cssprop [--font-color=#fff] Font Color
 */
@customElement('belle-avatar')
export class BelleAvatar extends LitElement {
  static styles = style

  /**
   * The shape of avatar component
   * @attr
   */
  @property({ type: String, reflect: true }) shape: Shape = 'circle'

  /**
   * Image address
   * @attr
   */
  @property({ type: String }) src = ''

  render(): TemplateResult {
    const classes = {
      'belle-avatar': true,
      'belle-avatar-img': this.src
    }

    return html`
      <span class="${classMap(classes)}">
        ${
          this.src ? html`${this.renderImg()}` : html`<slot></slot>`
        }
      </span>
    `
  }

  protected renderImg(): TemplateResult {
    return html`<img .src=${this.src} />`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-avatar': BelleAvatar
  }
}
