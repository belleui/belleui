import { customElement, LitElement, html, property, TemplateResult, query } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import style from './belle-select-css'

type OptionItem = HTMLElement & { selected: boolean, value: string }

/**
 * @element belle-select
 */
@customElement('belle-select')
export class BelleSelect extends LitElement {
  private TAGNAME = 'BELLE-SELECT-OPTION'

  private optionNodes: OptionItem[] = []

  static styles = style

  @query('#slot') protected optionSlot?: HTMLElement

  /**
   * 选中的值
   * @type {string}
   * @attr
   */
  @property({ type: String }) name = ''

  @property({ type: String }) content = ''

  @property({ type: Boolean }) isDropdown = false

  render(): TemplateResult {
    return html`
      <div class="belle-select">
        <div
          class="select-selector"
          @click=${this.toggleDropdown}
        >
          <span class="select-item">${this.content}</span>
          <span class="select-arrow"></span>
        </div>
        <div
          class="belle-select-dropdown"
          class=${classMap({
            'belle-select-dropdown': true,
            show: this.isDropdown
          })}
        >
          <slot id="slot" @slotchange=${this.slotChange}></slot>
        </div>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('on-click', this.handleClick)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('on-click', this.handleClick)
  }

  updated() {
    const optionSlot = this.optionSlot as HTMLSlotElement
    const optionNodes = optionSlot.assignedNodes()

    if (optionNodes && optionNodes.length) {
      for (let i = 0; i < optionNodes.length; i++) {
        const ele = optionNodes[i] as OptionItem
        if (ele.tagName === this.TAGNAME) {
          this.optionNodes.push(ele)
          const value = ele.value || ''
          if (this.name && (value === this.name)) {
            this.content = ele.innerText
            ele.selected = true
          } else {
            ele.selected = false
          }
        }
      }
    }
  }

  slotChange() {
    this.requestUpdate()
  }

  protected handleClick(e: Event) {
    const { value } = (e as CustomEvent).detail
    this.name = value
    this.toggleDropdown()
  }

  protected toggleDropdown() {
    this.isDropdown = !this.isDropdown
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-select': BelleSelect
  }
}
