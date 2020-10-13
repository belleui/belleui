import { TemplateResult, html } from 'lit-element'
import { action } from '@open-wc/demoing-storybook'
import '@belleui/belle-button'

import '../lib/belle-modal.js'

export default {
  title: 'Modal',
  component: 'belle-modal'
}

export const basic = (): TemplateResult => {
  return html`
    <belle-modal
      title="Basic Modal"
      .visible="${false}"
      @onOk=${action('ok')}
      @onCancel=${action('cancel')}
    >
      <div style="width: 500px;">
        <p>弹窗的内容</p>
        <p>弹窗的内容</p>
        <p>弹窗的内容</p>
        <p>弹窗的内容</p>
        <p>...</p>
      </div>
    </belle-modal>
    <belle-button
      onClick="this.previousElementSibling.visible = !this.previousElementSibling.visible"
      type="primary"
    >Open Modal</belle-button>
  `
}
