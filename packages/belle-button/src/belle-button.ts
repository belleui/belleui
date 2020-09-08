import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-button-css'

type ButtonType = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'dark'

/**
 * @element belle-button
 *
 * @slot - 默认插槽，按钮文字或者其他html标签
 *
 * @cssprop --font-color - 按钮字体颜色
 * @cssprop [--hover-font-color=--font-color] hover时按钮的颜色
 * @cssprop --background-color - 背景颜色
 * @cssprop --border-color - border颜色
 * @cssprop --hover-background-color - hover时按钮背景颜色
 * @cssprop --hover-border-color - hover时border的颜色
 * @cssprop [--border-radis=6px] 圆角
 */
@customElement('belle-button')
export class belleButton extends LitElement {
  static styles = style

  /**
   * 按钮的类型
   * @type {string}
   * @attr
   */
  @property({ type: String }) type: ButtonType = 'default'

  /**
   * 是否禁用按钮
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) disabled = false

  /**
   * 只显示外边框
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean }) outline = false

  render(): TemplateResult {
    return html`
      <button ?disabled="${this.disabled}" >
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-button': belleButton
  }
}
