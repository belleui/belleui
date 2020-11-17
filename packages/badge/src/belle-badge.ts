import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-badge-css'

/**
 * @element belle-badge
 */
@customElement('belle-badge')
export class BelleBadge extends LitElement {
  static styles = style

  /**
   * 展示的数字
   * @attr
   */
  @property({ type: Number, reflect: true }) count = 0

  /**
   * 当count为0，是否显示count
   * @attr
   */
  @property({ type: Boolean }) showZero = true

  render(): TemplateResult {
    return html`
      <span class="belle-badge">
        <slot></slot>
        ${
          this.count > 0 && this.showZero ? html` <sup class="belle-badge-count">${this.count}</sup> ` : null
        }
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-badge': BelleBadge
  }
}
