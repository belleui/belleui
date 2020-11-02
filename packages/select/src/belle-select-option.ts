import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-select-css'

/**
 * @element belle-select-option
 */
@customElement('belle-select-option')
export class BelleSelectOption extends LitElement {
  static styles = style

  /**
   * @type {string}
   * @attr
   */
  @property({ type: String }) value = ''

  /**
   * 是否被选中
   * @type {string}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) selected = false

  render(): TemplateResult {
    return html`
      <div
        class="belle-select-options"
        @click=${this.handleClick}
      >
        <slot></slot>
      </div>
    `
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('click', {
      bubbles: false,
      composed: true
    }))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-select-options': BelleSelectOption
  }
}
