import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'

import style from './belle-menu-css'

type Target = '_blank' | '_self' | ' _parent' | '_top'

/**
 * @element belle-menu
 */
@customElement('belle-menu-item')
export class BelleMenuItem extends LitElement {
  static styles = style

  /**
   * menu-item 的唯一标示符
   * @type {string}
   * @attr
   */
  @property({ type: String }) key = ''

  /**
   * 标题
   * @type {string}
   * @attr
   */
  @property({ type: String }) label?= ''

  /**
   * 跳转的地址，默认为空
   * @type {string}
   * @attr
   */
  @property({ type: String }) href?= ''

  /**
   * 链接打开的方式
   * @type {'_blank' | '_self' | ' _parent' | '_top'}
   * @attr
   */
  @property({ type: String }) target: Target = '_self'

  /**
   * 是否选中
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) selected = false

  render(): TemplateResult {
    return html`
      <div
        class="belle-menu-item"
        @click="${this.handleClick}"
      >
        <a
          .href="${this.href || '#'}"
          .target="${this.target}"
        >
          ${this.label ? this.label : html`<slot></slot>`}
        </a>
      </div>
    `
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('select', {
      bubbles: true,
      composed: true,
      detail: {
        key: this.key
      }
    }))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-menu-item': BelleMenuItem
  }
}
