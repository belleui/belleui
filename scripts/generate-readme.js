/**
 * 为package自动创建readme
 */
const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')
const dedent = require('dedent')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

class Readme {
  constructor() {
    this.pkg = this.getPkgName()

    this.rootPath = path.resolve(process.cwd())

    this.pkgPath = path.join(this.rootPath, 'packages', this.pkg)

    this.readmeDir = path.join(this.pkgPath, 'readme')

    this.bluePrintJson = path.join(this.readmeDir, 'blueprint.json')

    this.bluePrintMd = path.join(this.readmeDir, 'blueprint.md')

    this.excute()
  }

  /**
   * 获取package的名字
   */
  getPkgName() {
    const argv = process.argv.slice(2)
    if (!argv.length) {
      console.log(chalk.red("请输入组件名"))
      console.log(`eg: yarn readme ${chalk.green('belle-button')}`)
      process.exit(1)
    }

    const pkgName = argv[0]

    return pkgName

  }

  async excute() {
    console.log('generating readme...')

    // 判断组件是否存在
    if (!fs.existsSync(this.pkgPath)) {
      console.log(chalk.red("当前组件不存在"))
      process.exit(1)
    }

    let chain = Promise.resolve()

    chain = chain.then(() => Promise.all([
      this.writeBluePrintJson(this.bluePrintJson),
      this.writeBluePrintMd(this.bluePrintMd),
      this.writePropertyMd()
    ]))

    chain.then(async () => {
      console.log('')

      // 生成readme
      await this.readme()

      // remove readme
      fs.removeSync(this.readmeDir)

      console.log(`${chalk.green('文档生成成功')}`)
    })
  }

  writeBluePrintJson(fileName) {
    const content = dedent`
      {
        "line": "none",
        "headingPrefix": " ",
        "ids": {
          "npm": "@belleui/${this.pkg}"
        },
        "badges": [
          {
            "alt": "TypeScript",
            "url": "https://github.com/badges/shields",
            "img": "https://img.shields.io/npm/types/@belleui/${this.pkg}"
          }
        ]
      }
    `

    this.catFile(fileName, content)
  }

  // @TODO 截图
  writeBluePrintMd(fileName) {
    const content = dedent`
      {{ template:title }}

      {{ template:badges }}

      ## Preview

      ![screent shot](./image/screenshot.png)

      ## Install

      > npm install @belleui/${this.pkg}

      ## Useage

      {{ load:./packages/${this.pkg}/readme/property.md }}
    `

    this.catFile(fileName, content)
  }

  async writePropertyMd() {
    await exec(`wca packages/${this.pkg}/src --outFiles {dir}/../readme/property.md`)
  }

  async readme() {
    await exec(`readme generate -i ${this.bluePrintMd} -c ${this.bluePrintJson} -o ${this.pkgPath}/README.md`)
  }

  catFile(fileName, content, opts = "utf8") {
    return fs.outputFileSync(fileName, `${content}\n`, opts)
  }

}


new Readme()