import { customElement, LitElement, html, property, TemplateResult, query } from 'lit-element'

import style from './belle-switch-css'

/**
 * @element belle-switch
 */
@customElement('belle-switch')
export class BelleSwitch extends LitElement {
  static styles = style

  @query('input') protected formElement!: HTMLInputElement

  /**
   * 默认是否选中
   * @type {boolean}
   */
  @property({ type: Boolean }) checked = false

  /**
   * 是否禁用
   * @type {boolean}
   */
  @property({ type: Boolean }) disabled = false

  render(): TemplateResult {
    return html`
      <div class="switch-wrapper">
        <input
          hidden
          id="switch"
          type="checkbox"
          role="switch"
          .disabled="${this.disabled}"
          .checked=${this.checked}
          @change="${this.handleChange}"
        >
        <label class="switch" for="switch"></label>
        <slot></slot>
      </div>
    `
  }

  handleChange() {
    this.checked = this.formElement.checked
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
    'belle-switch': BelleSwitch
  }
}
