import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'

import style from './belle-menu-css'

@customElement('belle-submenu')
export class BelleSubMenu extends LitElement {
  static styles = style

  /**
   * 唯一标示符
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
   * 是否展开
   * @type {oolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) expand = false

  /**
   * 是否展开
   * @type {oolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) selected = false

  render(): TemplateResult {
    const classes = {
      'belle-submenu': true,
      'belle-submenu-expand': this.expand,
      selected: this.selected
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="header" @click="${this.toogleExpand}">
          <span>${this.label}</span>
          <i class="belle-menu-arrow"></i>
        </div>
        <div class="content">
          <slot id="slot"></slot>
        </div>
      </div>
    `
  }

  toogleExpand() {
    this.expand = !this.expand
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-submenu': BelleSubMenu
  }
}
