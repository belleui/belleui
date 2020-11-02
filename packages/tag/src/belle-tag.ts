import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map.js'
import { classMap } from 'lit-html/directives/class-map.js'

import style from './belle-tag-css'

/**
 * @element belle-tag
 */
@customElement('belle-tag')
export class BelleTag extends LitElement {
  static styles = style

  /**
   * 颜色
   * @type {string}
   * @attr
   */
  @property({ type: String }) color = ''

  render(): TemplateResult {
    const classes = {
      'belle-tag': true,
      'belle-tag-color': this.color
    }
    return html`
      <span class=${classMap(classes)} style=${styleMap({
        backgroundColor: this.color ? this.color : 'var(--background-color)'
      })}>
        <slot></slot>
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-tag': BelleTag
  }
}
