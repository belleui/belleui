import { customElement, LitElement, html, property, TemplateResult, query } from 'lit-element'

import style from './belle-radio-css'

/**
 * @element belle-radio
 *
 * @slot - 默认插槽，按钮文字或者其他html标签
 *
 */
@customElement('belle-radio')
export class BelleRadio extends LitElement {
  static styles = style

  @query('input') protected input!: HTMLInputElement

  /**
   * 默认是否选中
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean }) checked = false

  /**
   * 是否禁用
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) disabled = false

  /**
   * 单选框的值
   * @type {string}
   * @attr
   */
  @property({ type: String }) value = ''

  render(): TemplateResult {
    return html`
      <label class="radio-wrapper">
        <span class="radio">
          <input
            type="radio"
            class="radio-input"
            .value="${this.value}"
            .checked="${this.checked}"
            ?disabled="${this.disabled}"
            @change="${this.handleChange}"
          />
          <span class="radio-inner"></span>
        </span>
        <span class="radio-content">
          <slot></slot>
        </span>
      </label>
    `
  }

  handleChange() {
    this.checked = this.input.checked
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: {
        checked: this.checked
      }
    }))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-radio': BelleRadio
  }
}
