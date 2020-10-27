import { TemplateResult, html } from 'lit-element'
import { action, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook'
import '@belleui/belle-button'

import '../lib/belle-modal.js'

export default {
  title: 'Modal',
  component: 'belle-modal',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
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

const footer = html`
  <belle-button>Cancel</belle-button>
  <belle-button type="primary">Ok</belle-button>
`

export const custom = (): TemplateResult => {
  return html`
    <belle-modal
      title="Custom"
      .visible="${false}"
      .footer=${footer}
      @onOk=${action('ok')}
      @onCancel=${action('cancel')}
    >
      <div style="width: 500px;">
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
