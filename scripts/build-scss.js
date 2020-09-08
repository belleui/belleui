const fs = require('fs')
const sass = require('node-sass')
const dedent = require('dedent')
const commandLineArgs = require('command-line-args')

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

const optionDefinitions = [
  { name: 'source', alias: 's', type: String },
  { name: 'output', alias: 'o', type: String }
]

const { source, output } = commandLineArgs(optionDefinitions)

sassRender(source, output)
