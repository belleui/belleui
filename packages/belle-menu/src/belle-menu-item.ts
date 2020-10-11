import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import { fire } from '@belleui/belle-lib'

import style from './belle-menu-css'

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
   * @type {string}
   * @attr
   */
  @property({ type: String })
  target: '_blank' | '_self' | ' _parent' | '_top' = '_self'

  /**
   * 是否选中
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) selected = false

  render(): TemplateResult {
    return html`
      <div class="belle-menu-item">
        <a
          .href="${this.href || '#'}"
          .target="${this.target}"
          @click="${this.handleClick}"
        >
          ${this.label ? this.label : html`<slot></slot>`}
        </a>
      </div>
    `
  }

  handleClick() {
    fire(this, 'change', { key: this.key, type: 'menuChange' })
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-menu-item': BelleMenuItem
  }
}
