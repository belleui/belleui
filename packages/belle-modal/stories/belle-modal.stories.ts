import { TemplateResult, html } from 'lit-element'

import '@belleui/belle-button'
import '../lib/belle-modal'

export default {
  title: 'Modal',
  component: 'belle-modal'
}

// @customElement('modal-demo')
// export class ModalDemo extends LitElement {
//   @property({ type: Boolean }) visible = false

//   render(): TemplateResult {
//     return html`
//       <div>
//         <belle-button type="primary" @click=${() => this.visible = true}>Open Modal</belle-button>
//         <belle-modal
//           .visible=${this.visible}
//           title="Basic Modal"
//         >
//           这是弹窗的内容
//         </belle-modal>
//       </div>
//     `
//   }
// }

export const Basic = (): TemplateResult => html`
  <!-- <modal-demo></modal-demo> -->
  <belle-modal
    visible
    title="Basic Modal"
  >
    <div style="width: 500px;">
      <p>弹窗的内容</p>
      <p>弹窗的内容</p>
      <p>弹窗的内容</p>
      <p>弹窗的内容</p>
      <p>...</p>
    </div>
  </belle-modal>
`
