# belleui

Bellui是一个Web-Components的UI组件库，您可以在HTML中，或者任何框架（如[React](https://github.com/facebook/react), [Vue](https://github.com/vuejs/vue),  [Angular](https://github.com/angular/angular)）中使用。

## 组件

| Components | Issues | Version |
| ---------- | ------- | ------ |
| [belle-button](https://github.com/belleui/belleui/blob/master/packages/belle-button) | [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3AButton) | [![npm version](https://img.shields.io/npm/v/@belleui/belle-button.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-button) |
| [belle-radio](https://github.com/belleui/belleui/blob/master/packages/belle-radio) |  [Issues](https://github.com/belleui/belleui/issues?q=label%3AComponent%3ARadio)  | [![npm version](https://img.shields.io/npm/v/@belleui/belle-radio.svg?style=flat)](https://www.npmjs.com/package/@belleui/belle-radio) |

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

<!-- 没有使用 [webpack](), [rollup]() 等构工具📦 -->

Html文件中使用：

```html
<script type="module">
  import '@belleui/belle-button'
</script>
<body>
  <belle-button>Button</belle-button>
  <belle-button type="primary">Primary</belle-button>
</body>
```

和 `lit-element` 一起使用

```javascript


```

## Contributing

使用 [yarn](https://yarnpkg.com/) 作为你的🔧包管理工具

> git clone https://github.com/belleui/belleui.git
>
> cd belleui
>
> yarn

快速预览demo：

```sh
yarn build

yarn dev
```

开发流程:

```sh
# 编译 TS文件
yarn watch

yarn dev
```
