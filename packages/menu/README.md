<!-- ⚠️ This README has been generated from the file(s) "/Users/wusong/Code/github-project/belleui/packages/menu/readme/blueprint.md" ⚠️-->
[](#belleuibelle-menu)

# @belleui/belle-menu

<p>
		<a href="https://npmcharts.com/compare/@belleui/belle-menu?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@belleui/belle-menu.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@belleui/belle-menu"><img alt="NPM Version" src="https://img.shields.io/npm/v/@belleui/belle-menu.svg" height="20"/></a>
<a href="https://github.com/belleui/belleui/blob/master/packages/menu"><img alt="TypeScript" src="https://img.shields.io/npm/types/@belleui/belle-menu" height="20"/></a>
<a href="https://www.webcomponents.org/element/@belleui/belle-menu"><img alt="Published on webcomponents.org" src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" height="20"/></a>
	</p>

[](#install)

## Install

> npm install @belleui/belle-menu


[](#useage)

## Useage

```typescript
class CustomMenu extend LitElement {
  render () {
    return html`
      <belle-menu
        defaultSelectedKey="menu2"
        .defaultOpenKeys=${['menus1']}
        @onSelect=${this.handleSelected}
      >
        <belle-submenu key="menus1" label="Menus1">
          <belle-menu-item key="menu1">Menu1</belle-menu-item>
          <belle-menu-item key="menu2">Menu2</belle-menu-item>
        </belle-submenu>
        <belle-menu-item key="menu3">Menu3</belle-menu-item>
        <belle-menu-item
          key="google"
          href="https://www.google.com"
          target="_blank"
          label="Google"
        >
        </belle-menu-item>
      </belle-menu>
    `
  }

  handleSelected (e: CustomEvent) {
    const { key } = e.detail
    console.log('key is:', key)
  }
}
```

[](#properties)

## Properties

| Property             | Attribute            | Type     | Default | Description |
|----------------------|----------------------|----------|---------|-------------|
| `defaultOpenKeys`    | `defaultOpenKeys`    | `Array`  | [""]    | 默认展开的子菜单    |
| `defaultSelectedKey` | `defaultSelectedKey` | `string` | ""      | 默认选中的值      |


## Events

| Event      | Type                         |
|------------|------------------------------|
| `onSelect` | `CustomEvent<{ key: any; }>` |


