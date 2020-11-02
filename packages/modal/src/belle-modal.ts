import { customElement, LitElement, html, property, TemplateResult, query } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import style from './belle-modal-css'

import '@belleui/belle-button'

/**
 * @element belle-modal
 *
 * @fires onOk - 关闭弹窗和点击取消的回调函数
 * @fires onCancel - 点击确定的回调函数
 */
@customElement('belle-modal')
export class BelleModal extends LitElement {
  static styles = style

  @query('.modal-mask') modalMask!: HTMLElement

  /**
   * 是否显示弹窗
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) visible = false

  /**
   * 弹窗标题
   * @type {string}
   * @attr
   */
  @property({ type: String }) title = ''

  /**
   * 是否显示右上角关闭按钮
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean }) closable = true

  /**
   * 是否允许点击蒙层关闭
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean }) maskClosable = true

  /**
   * 取消按钮文字
   * @type {string}
   * @attr
   */
  @property({ type: String }) cancelText = '取消'

  /**
   * 确认按钮文字
   * @type {string}
   * @attr
   */
  @property({ type: String }) okText = '确认'

  /**
   * 自定义footer，为null时不显示footer
   * @type {TemplateResult | null}
   * @attr
   */
  @property() footer: any = ''

  firstUpdated() {
    this.modalMask.addEventListener('click', () => {
      if (this.maskClosable) {
        this.handleCancel()
      }
    })
  }

  render(): TemplateResult {
    const classes = {
      'belle-modal': true,
      'modal-open': this.visible
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="modal-mask"></div> 
        <div class="modal-container">
          ${this.renderCloseIcon()}
          <div class="modal-header">
            <div class="modal-title">${this.title}</div>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          ${this.renderFooter()}  
        </div>
      </div>
    `
  }

  protected renderCloseIcon(): TemplateResult {
    if (this.closable) {
      return html`
        <i class="modal-close" @click="${this.handleCancel}">
          <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </i>
      `
    }

    return html``
  }

  protected renderFooter(): TemplateResult {
    if (this.footer === null) return html``

    if (this.footer) {
      return html`<div class="modal-footer">${this.footer}</div>`
    }

    return html`
      <div class="modal-footer">
        <belle-button @click="${this.handleCancel}">${this.cancelText}</belle-button>
        <belle-button type="primary" @click="${this.handleOk}">${this.okText}</belle-button>
      </div>
    `
  }

  handleCancel() {
    this.visible = false
    this.dispatchEvent(new Event('onCancel', {
      bubbles: true,
      composed: true
    }))
  }

  handleOk() {
    this.visible = false
    this.dispatchEvent(new Event('onOk', {
      bubbles: true,
      composed: true
    }))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-modal': BelleModal
  }
}
