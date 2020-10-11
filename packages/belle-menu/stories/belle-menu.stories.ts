import { TemplateResult, html } from 'lit-element'

import '../lib/index'

export default {
  title: 'Menu',
  component: 'belle-menu'
}

export const Default = (): TemplateResult => html`
  <section style="width: 200px;">
    <belle-menu defaultSelectedKeys="menu3">
      <belle-menu-item key="menu1">Menu1</belle-menu-item>
      <belle-menu-item key="menu2">Menu2</belle-menu-item>
      <belle-menu-item key="menu3">Menu3</belle-menu-item>
      <belle-menu-item
        key="google"
        href="https://www.google.com"
        target="_blank"
        label="Google"
      ></belle-menu-item>
    </belle-menu>
  </section>
`
