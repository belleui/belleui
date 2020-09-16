const fs = require('fs')
const path = require('path')

function getPkg(dirent) {
  const workshop = path.resolve(process.cwd())
  const source = path.join(workshop, dirent)

  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}

module.exports = getPkg
