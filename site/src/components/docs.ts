import { customElement, LitElement, html, TemplateResult } from 'lit-element'
import { ComponentDocs } from '../utils/docs'

@customElement('docs-component')
export class DocsComponent extends LitElement {
  render(): TemplateResult {
    let result = html`${ComponentDocs.get('belle-button')}`
    return result
  }
}
