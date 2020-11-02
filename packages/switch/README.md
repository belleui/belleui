[](#belleuibelle-switch)

# @belleui/belle-switch

<p>
		<a href="https://npmcharts.com/compare/@belleui/belle-switch?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@belleui/belle-switch.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@belleui/belle-switch"><img alt="NPM Version" src="https://img.shields.io/npm/v/@belleui/belle-switch.svg" height="20"/></a>
<a href="https://github.com/belleui/belleui/blob/master/packages/switch"><img alt="TypeScript" src="https://img.shields.io/npm/types/@belleui/belle-switch" height="20"/></a>
<a href="https://www.webcomponents.org/element/@belleui/belle-switch"><img alt="Published on webcomponents.org" src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" height="20"/></a>
	</p>



[](#preview)

## Preview

![screent shot](./image/screenshot.png)

[](#install)

## Install

> npm install @belleui/belle-switch


[](#useage)

## Useage

```html
<belle-switch>Switch</belle-switch>
<belle-switch disabled>Disabled</belle-switch>
<belle-switch checked>Checked</belle-switch>
```

[](#properties)

## Properties

| Property   | Attribute  | Type      | Default | Description |
|------------|------------|-----------|---------|-------------|
| `checked`  | `checked`  | `boolean` | false   | 默认是否选中      |
| `disabled` | `disabled` | `boolean` | false   | 是否禁用        |


[](#methods)

## Methods

| Method         | Type       |
|----------------|------------|
| `handleChange` | `(): void` |


[](#events)

## Events

| Event    | Type                                 |
|----------|--------------------------------------|
| `change` | `CustomEvent<{ checked: boolean; }>` |

