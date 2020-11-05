# Belleui

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@belleui/belle-elements)

Bellui是一个基于 [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 的 UI 组件库，您可以在`HTML`中，或者任何框架（如[React](https://github.com/facebook/react), [Vue](https://github.com/vuejs/vue),  [Angular](https://github.com/angular/angular)）中使用。引入组件后，你可以随时随地的像使用原生`html`标签一样使用组件。

## 为什么选择 Belleui

* 基于`Web Components`，能和其他框架结合使用，不用因为切换技术栈从而切换不用的UI框架。
* 支持主流浏览器。
* 提供丰富的UI组件。

**相关资源：**

* [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* [LitElement](https://lit-element.polymer-project.org/)

## 组件

| Components | Issues | Version |
| ---------- | ------- | ------ |
| [belle-button](https://github.com/belleui/belleui/blob/master/packages/button) | [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3AButton) | [![npm version](https://img.shields.io/npm/v/@belleui/belle-button.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-button) |
| [belle-card](https://github.com/belleui/belleui/blob/master/packages/card) | [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3ACard) | [![npm version](https://img.shields.io/npm/v/@belleui/belle-card.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-card) |
| [belle-elements](https://github.com/belleui/belleui/blob/master/packages/elements) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3AElements)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-elements.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-elements) |
| [belle-menu](https://github.com/belleui/belleui/blob/master/packages/menu) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3AMenu)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-menu.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-menu) |
| [belle-modal](https://github.com/belleui/belleui/blob/master/packages/modal) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3AModal)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-modal.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-modal) | 
| [belle-radio](https://github.com/belleui/belleui/blob/master/packages/radio) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3ARadio)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-radio.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-radio) 
| [belle-select](https://github.com/belleui/belleui/blob/master/packages/select) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3ASelect)  |[![npm version](https://img.shields.io/npm/v/@belleui/belle-select.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-select)
| [belle-switch](https://github.com/belleui/belleui/blob/master/packages/switch) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%Switch)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-switch.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-switch) |
| [belle-tag](https://github.com/belleui/belleui/blob/master/packages/tag) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%Tag)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-tag.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-tag) |

## 开始

在你的项目中使用 `belleui`，你可以安装整个组件库到项目中，或者安装单个组件：

```bash
# 安装整个组件
npm install @belleui/belle-elements

# 安装button组件
npm install @belleui/belle-button
```

使用 Yarn 安装：

```bash
yarn add @belleui/belle-elements
```

## 如何使用

在 `Web Components` 项目中使用:

```javascript
import { LitElement, html } from 'lit-element'
import '@belleui/belle-elements'

class MyApp extends LitElement {
  render() {
    return html`
      <belle-button type="primary">Button</belle-button>
    `
  }
}
```

在 `React` 项目中使用：

[![Edit belleui-react-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/belleui-react-demo-iet3z?fontsize=14&hidenavigation=1&theme=dark)


## 开发

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/belleui/belleui)

使用 [yarn](https://yarnpkg.com/) 作为你的包管理工具

```bash
git clone https://github.com/belleui/belleui.git
cd belleui
yarn
```

快速预览demo：

```sh
yarn storybook
```

开发：

```sh
# 编译 TS文件
yarn watch

# 预览demo
yarn storybook
```

## 参与贡献

[贡献指南](./docs/contribute.md)
