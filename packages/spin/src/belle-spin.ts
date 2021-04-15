import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-spin-css'

/**
 * @element belle-spin
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
          ${this.renderSpin()}
        </div>
      </div>
    `
  }

  protected renderSpin(): TemplateResult {
    return html`
      <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"/>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-spin': BelleSpin
  }
}
