import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-button-css'

type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'light'
  | 'dark'

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
export class BelleButton extends LitElement {
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
  @property({ type: Boolean, reflect: true }) outline = false

  /**
   * 是否显示loading状态
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) loading = false

  render(): TemplateResult {
    return html`
      <button
        ?disabled="${this.disabled}"
      >
        <span>
          <slot></slot>
        </span>
        ${this.loading ? this.renderSpin() : ''}
      </button>
    `
  }

  protected renderSpin(): TemplateResult {
    if (!this.loading) return html``

    return html`
      <span class="loading-icon">
        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-button': BelleButton
  }
}
