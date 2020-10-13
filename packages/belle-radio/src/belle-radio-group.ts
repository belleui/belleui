import { customElement, LitElement, html, TemplateResult, query, property } from 'lit-element'

type RadioItem = HTMLElement & { checked: boolean, value: string }

/**
 * @element belle-radio-group
 *
 * @fires on-change - 单选框选中事件
 *
 * @slot - radio item（defualt slot）
 */
@customElement('belle-radio-group')
export class BelleRadioGroup extends LitElement {
  @query('#slot') protected radioSlot?: HTMLElement

  private TAGNAME = 'BELLE-RADIO'

  /**
   * 默认选中的值
   * @type {boolean}
   * @attr
   */
  @property({ type: String }) selected?: string

  private radioNodes: RadioItem[] = []

  render(): TemplateResult {
    return html`
      <div class="radio-group-wrapper">
        <slot id="slot" @slotchange="${this.slotChange}"></slot>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('change', this.handleChecked)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('change', this.handleChecked)
  }

  handleChecked(event: Event) {
    const item = event.target as RadioItem
    const checked = (event as CustomEvent).detail.checked
    const value = item.value || ''
    if (!checked) {
      item.checked = true
    } else {
      this.selected = (checked && value) || ''
    }

    this.radioNodes.forEach(node => {
      return (node.checked = node === item)
    })

    this.dispatchEvent(new CustomEvent('on-change', {
      bubbles: true,
      composed: true,
      detail: {
        selected: this.selected
      }
    }))
  }

  slotChange() {
    this.requestUpdate()
  }

  updated() {
    const radioSlot = this.radioSlot as HTMLSlotElement
    const radioNodes = radioSlot.assignedNodes()

    if (radioNodes && radioNodes.length) {
      for (let i = 0; i < radioNodes.length; i++) {
        const ele = radioNodes[i] as RadioItem
        if (ele.tagName === this.TAGNAME) {
          this.radioNodes.push(ele)
          const value = ele.value || ''
          if (this.selected && (value === this.selected)) {
            ele.checked = true
          } else {
            ele.checked = false
          }
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-radio-group': BelleRadioGroup
  }
}
