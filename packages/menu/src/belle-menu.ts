import { customElement, LitElement, html, property, TemplateResult, query } from 'lit-element'

import style from './belle-menu-css'

export type MenuItem = HTMLElement & {
  key: string,
  selected: boolean,
  expand?: boolean
}

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
  @property({ type: String }) defaultSelectedKey = ''

  /**
   * 默认展开的子菜单
   * @type {Array}
   * @attr
   */
  @property({ type: Array }) defaultOpenKeys: string[] = ['']

  render(): TemplateResult {
    return html`
      <div class="belle-menu">
        <slot id="slot" @slotchange="${this.slotChange}"></slot>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('select', this.handleSelect)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('select', this.handleSelect)
  }

  slotChange() {
    const menuSlot = this.menuSlot as HTMLSlotElement
    this.findMenuItem(menuSlot)
  }

  private findMenuItem(nodes: HTMLElement) {
    const { defaultSelectedKey, defaultOpenKeys } = this

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let menuNodes: any = []

    // 目的是为了获取belle-menus和belle-submenus下的belle-menus
    if (nodes.tagName === 'SLOT') {
      menuNodes = (nodes as HTMLSlotElement).assignedNodes()
    } else {
      menuNodes = nodes.querySelectorAll('belle-menu-item')
    }

    if (menuNodes.length) {
      for (let i = 0; i < menuNodes.length; i++) {
        const ele = menuNodes[i] as MenuItem
        const { key = '', tagName, nodeType } = ele

        // 筛选ELEMENT_NODE
        if (nodeType === 1) this.nodes.push(ele)

        if (tagName === 'BELLE-SUBMENU') {
          this.findMenuItem(ele)
        }

        // 默认选中
        if (key === defaultSelectedKey) {
          ele.selected = true
          // 如果是子菜单，父元素也需要高亮
          if (ele.parentElement?.tagName === 'BELLE-SUBMENU') {
            (ele.parentElement as MenuItem).selected = true
          }
        }

        // 默认展开
        if (defaultOpenKeys.includes(key)) {
          if (tagName === 'BELLE-SUBMENU') {
            ele.expand = true
          }
        }
      }
    }
  }

  /**
   * 监听选中事件
   */
  handleSelect(e: Event) {
    const { key } = (e as CustomEvent).detail

    if (!key) {
      return console.error("Current menu don't hava key")
    }

    const item = e.target as MenuItem

    this.nodes.forEach(node => {
      node.selected = node === item
    })

    const parentElement = item.parentElement as MenuItem
    if (parentElement?.tagName === 'BELLE-SUBMENU') {
      parentElement.selected = true
    } else {
      parentElement.selected = false
    }

    // 抛出事件
    this.dispatchEvent(new CustomEvent('onSelect', {
      bubbles: true,
      composed: true,
      detail: {
        key
      }
    }))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-menu': BelleMenu
  }
}
