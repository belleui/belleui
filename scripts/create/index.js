const chalk = require('chalk')
const dedent = require('dedent')

console.log(
  chalk.cyan(dedent`
    🙏 感谢您的贡献

    🚀 当前命令用于快速创建组件

    💡 组件名应该添加'belle'前缀, 如：belle-button

    🌟 创建新的组件后，记得更新README.md中的 Components 列表
  `)
)
