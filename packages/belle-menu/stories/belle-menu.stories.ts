import { TemplateResult, html } from 'lit-element'

import '../lib/index'

export default {
  title: 'Menu',
  component: 'belle-menu'
}

export const Default = (): TemplateResult => html`
  <section style="width: 200px;">
    <belle-menu defaultSelectedKeys="menu4">
      <belle-submenu key="menus1" label="Menus1" expand>
        <belle-menu-item key="menu1">Menu1</belle-menu-item>
        <belle-menu-item key="menu2">Menu2</belle-menu-item>
      </belle-submenu>
      <belle-submenu key="menus2" label="Menus2" expand>
        <belle-menu-item key="menu5">Menu5</belle-menu-item>
        <belle-menu-item key="menu6">Menu6</belle-menu-item>
      </belle-submenu>
      <belle-menu-item key="menu3">Menu3</belle-menu-item>
      <belle-menu-item key="menu4">Menu4</belle-menu-item>
      <belle-menu-item
        key="google"
        href="https://www.google.com"
        target="_blank"
        label="Google"
      ></belle-menu-item>
    </belle-menu>
  </section>
`
