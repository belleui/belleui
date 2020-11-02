/**
 * 编译scss
 */
const fs = require('fs')
const path = require('path')
const sass = require('node-sass')
const dedent = require('dedent')
const getPkg = require('./utils/getPkg')

/**
 * https://sass-lang.com/documentation/js-api
 */
function sassTocss(sassFile) {
  const result = sass.renderSync({
    file: sassFile,
    outputStyle: 'compressed'
  })

  return result.css.toString()
}

function sassRender(source, output) {
  const cssFile = sassTocss(source)
  const cssTsFile = cssTstemplate(cssFile)

  return fs.writeFileSync(output, `${cssTsFile}\n`, 'utf-8')
}


function cssTstemplate(content) {
  const newContent = dedent`
    import { css } from 'lit-element'
    export default css\`${content}\`
  `
  return newContent
}

const packages = getPkg('packages')

if (packages.length) {
  packages.forEach(pkg => {
    const scssFile = path.join('packages', pkg, 'src', `belle-${pkg}.scss`)
    const cssTS = path.join('packages', pkg, 'src', `belle-${pkg}-css.ts`)

    if (fs.existsSync(scssFile)) {
      sassRender(scssFile, cssTS)
    }
  })
}

