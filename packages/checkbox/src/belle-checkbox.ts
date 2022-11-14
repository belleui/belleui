import { customElement, LitElement, html, property, TemplateResult } from 'lit-element'
import style from './belle-checkbox-css'

/**
 * @element belle-checkbox
 */
@customElement('belle-checkbox')
export class BelleCheckbox extends LitElement {
  static styles = style

  @property()

  render(): TemplateResult {
    return html`
      <label class="belle-checkbox-wrapper">
        <span class="belle-checkbox">
          <input type="checkbox" class="belle-checkbox-input" />
          <span class="belle-checkbox-inner"></span>
        </span>
        <span>
          <slot></slot>
        </span>
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-checkbox': BelleCheckbox
  }
}
