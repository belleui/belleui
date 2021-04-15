import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-spin-css'

/**
 * @element belle-spin
 *
 * @cssprop [--bubble-color=dedada] 圆圈颜色
 * @cssprop [--bubble-size=10px] 圆圈大小
 */
@customElement('belle-spin')
export class BelleSpin extends LitElement {
  static styles = style

  /**
   * 是否加载中状态
   * @type {boolean}
   * @attr
   */
  @property({ type: Boolean, reflect: true }) spinning = true

  render(): TemplateResult {
    return html`
      <div class="spin-wrapper">
        <div class="spin-spinning">
          ${this.renderSpin(8)}
        </div>
      </div>
    `
  }

  protected renderSpin(length: number): TemplateResult {
    const bubbles = []

    for (let i = 0; i < length; i++) {
      bubbles.push(html`
        <div class="bubble-container">
          <div class="bubble"></div>
        </div>
      `)
    }

    return html`
      <div class="spin-container">
        ${bubbles}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-spin': BelleSpin
  }
}
