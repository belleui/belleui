[](#belleuibelle-radio)

# @belleui/belle-radio

<p>
		<a href="https://npmcharts.com/compare/@belleui/belle-radio?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@belleui/belle-radio.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@belleui/belle-radio"><img alt="NPM Version" src="https://img.shields.io/npm/v/@belleui/belle-radio.svg" height="20"/></a>
<a href="https://github.com/belleui/belleui/blob/master/packages/radio"><img alt="TypeScript" src="https://img.shields.io/npm/types/@belleui/belle-radio" height="20"/></a>
<a href="https://www.webcomponents.org/element/@belleui/belle-radio"><img alt="Published on webcomponents.org" src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" height="20"/></a>
	</p>



[](#preview)

## Preview

![screent shot](./image/screenshot.png)


[](#install)

## Install

> npm install @belleui/belle-radio


[](#useage)

## Useage

```html
<belle-radio-group selected="radio1">
  <belle-radio value="radio1">Radio1</belle-radio>
  <belle-radio value="radio2">Radio2</belle-radio>
  <belle-radio value="radio3">Radio3</belle-radio>
</belle-radio-group>
```

[](#demo)

# Demo

[Click to view demo](https://codesandbox.io/s/belle-radio-rhpq0?file=/src/index.js)

[](#belle-radio-group)

## belle-radio-group


[](#properties)

### Properties

| Property   | Attribute  | Type      | Description |
|------------|------------|-----------|-------------|
| `selected` | `selected` | `boolean` | 默认选中的值      |


[](#methods)

### Methods

| Method          | Type                   |
|-----------------|------------------------|
| `handleChecked` | `(event: Event): void` |
| `slotChange`    | `(): void`             |


[](#events)

### Events

| Event       | Type                                             | Description |
|-------------|--------------------------------------------------|-------------|
| `on-change` | `CustomEvent<{ selected: string \| undefined; }>` | 单选框选中事件     |


[](#slots)

### Slots

| Name | Description              |
|------|--------------------------|
|      | radio item（defualt slot） |



[](#belle-radio)

## belle-radio


[](#properties)

### Properties

| Property   | Attribute  | Type      | Default | Description |
|------------|------------|-----------|---------|-------------|
| `checked`  | `checked`  | `boolean` | false   | 默认是否选中      |
| `disabled` | `disabled` | `boolean` | false   | 是否禁用        |
| `value`    | `value`    | `string`  | ""      | 单选框的值       |


[](#methods)

### Methods

| Method         | Type       |
|----------------|------------|
| `handleChange` | `(): void` |


[](#events)

### Events

| Event    | Type                                 |
|----------|--------------------------------------|
| `change` | `CustomEvent<{ checked: boolean; }>` |


[](#slots)

### Slots

| Name | Description         |
|------|---------------------|
|      | 默认插槽，按钮文字或者其他html标签 |

