import { customElement, LitElement, html, property, TemplateResult, query } from 'lit-element'

import style from './belle-menu-css'

export type MenuItem = HTMLElement & { key: string, selected: boolean }

/**
 * @element belle-menu
 */
@customElement('belle-menu')
export class BelleMenu extends LitElement {
  static styles = style

  // 存放menu-item 和 submenu元素
  private nodes: MenuItem[] = []

  @query('#slot') protected menuSlot?: HTMLElement

  /**
   * 默认选中的值
   * @type {string}
   * @attr
   */
  @property({ type: String }) defaultSelectedKeys = ''

  render(): TemplateResult {
    return html`
      <div class="belle-menu">
        <slot id="slot" @slotchange="${this.slotChange}"></slot>
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
    // 获取menu-item 和 submenu
    const menuSlot = this.menuSlot as HTMLSlotElement
    this.findMenuItem(menuSlot)
  }

  private findMenuItem(nodes: HTMLElement) {
    let menuNodes: any = []

    if (nodes.tagName === 'SLOT') {
      menuNodes = (nodes as HTMLSlotElement).assignedNodes()
    } else {
      menuNodes = nodes.querySelectorAll('belle-menu-item')
    }

    if (menuNodes && menuNodes.length) {
      for (let i = 0; i < menuNodes.length; i++) {
        const ele = menuNodes[i] as MenuItem
        const tagName = ele.tagName
        const key = ele.key || ''

        if (tagName === 'BELLE-SUBMENU') {
          this.findMenuItem(menuNodes[i] as HTMLElement)
        }

        if (tagName === 'BELLE-MENU-ITEM') {
          this.nodes.push(ele)
          // 设置默认选中的item
        }

        if (this.defaultSelectedKeys && (key === this.defaultSelectedKeys)) {
          ele.selected = true
        } else {
          ele.selected = false
        }
      }
    }
  }

  /**
   * 监听belle-menu-item 的点击事件
   */
  handleChange(e: Event) {
    const { key, type } = (e as CustomEvent).detail

    if (type !== 'menuChange') return

    const item = e.target as MenuItem

    if (!key) {
      return console.error("Current menu don't hava key")
    }

    this.defaultSelectedKeys = key

    this.nodes.forEach(node => {
      return (node.selected = node === item)
    })
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-menu': BelleMenu
  }
}
