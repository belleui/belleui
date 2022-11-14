import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-loading-css'

/**
 * @element belle-loading
 */
@customElement('belle-loading')
export class BelleLoading extends LitElement {
  static styles = style

  @property()

  render(): TemplateResult {
    return html`

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-loading': BelleLoading
  }
}
