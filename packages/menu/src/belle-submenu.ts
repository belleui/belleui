import { customElement, LitElement, html, property, TemplateResult, query } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import { MenuItem } from './belle-menu.js'

import style from './belle-menu-css'

@customElement('belle-submenu')
export class BelleSubMenu extends LitElement {
  static styles = style

  private nodes: MenuItem[] = []

  @query('#slot') protected menuSlot?: HTMLElement

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
      'belle-sub-menu': true,
      expand: this.expand,
      selected: this.selected
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="header" @click="${this.toogleExpand}">
          <span>${this.label}</span>
          <i></i>
        </div>
        <div class="content">
          <slot id="slot" @slotchange="${this.slotChange}"></slot>
        </div>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('change', this.handleChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('change', this.handleChange)
  }

  slotChange() {
    const menuSlot = this.menuSlot as HTMLSlotElement
    const menuNodes = menuSlot.assignedNodes()

    if (menuNodes && menuNodes.length) {
      for (let i = 0; i < menuNodes.length; i++) {
        const ele = menuNodes[i] as MenuItem
        const tagName = ele.tagName

        if (tagName === 'BELLE-MENU-ITEM') {
          this.nodes.push(ele)
          // 如果slot中有选中的menu，则当前submenu被选中
          if (ele.selected) {
            this.selected = true
          }
        }
      }
    }
  }

  toogleExpand() {
    this.expand = !this.expand
  }

  updated() {
    console.log('updated...')
  }

  // TODO
  handleChange(e: Event) {
    const item = e.target as MenuItem
    console.log('item is:', item)
    this.nodes.map(node => {
      if (node === item) {
        this.selected = true
        console.log('===')
      } else {
        console.log('!==')
        this.selected = false
      }
    })
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-submenu': BelleSubMenu
  }
}
