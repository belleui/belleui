# Belleui

Bellui是一个基于 [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 的 UI 组件库，您可以在`HTML`中，或者任何框架（如[React](https://github.com/facebook/react), [Vue](https://github.com/vuejs/vue),  [Angular](https://github.com/angular/angular)）中使用。引入组件后，你可以随时随地的像使用原生`html`标签一样使用组件。

**相关资源：**

* [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* [LitElement](https://lit-element.polymer-project.org/)

## 组件

| Components | Issues | Version |
| ---------- | ------- | ------ |
| [belle-button](https://github.com/belleui/belleui/blob/master/packages/belle-button) | [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3AButton) | [![npm version](https://img.shields.io/npm/v/@belleui/belle-button.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-button) |
| [belle-elements](https://github.com/belleui/belleui/blob/master/packages/belle-elements) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3AElements)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-elements.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-elements) |
| [belle-lib](https://github.com/belleui/belleui/blob/master/packages/belle-lib) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3ALib)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-lib.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-lib) 
| [belle-radio](https://github.com/belleui/belleui/blob/master/packages/belle-radio) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3ARadio)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-radio.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-radio) 
| [belle-switch](https://github.com/belleui/belleui/blob/master/packages/belle-switch) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%Switch)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-switch.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-switch) 

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

[![Edit rough-dream-97k4u](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rough-dream-97k4u?fontsize=14&hidenavigation=1&theme=dark)

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
