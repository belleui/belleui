import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-card-css'

/**
 * @element belle-card
 */
@customElement('belle-card')
export class BelleCard extends LitElement {
  static styles = style

  /**
   * 标题
   * @type {string}
   * @attr
   */
  @property({ type: String }) title = ''

  render(): TemplateResult {
    return html`
      <div class="belle-card-wrapper">
        <div class="card-head">
          <div class="card-title">${this.title}</div>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-card': BelleCard
  }
}
