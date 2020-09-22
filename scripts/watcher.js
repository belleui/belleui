/**
 * 为了避免在每个package下面执行script，所以统一监听package的变化
 */

const watch = require('node-watch')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

const options = {
  recursive: true,
  filter: f => {
    if (/node_modules/.test(f)) {
      return false
    }

    if (/lib/.test(f)) {
      return false
    }

    return /.(ts|scss)$/.test(f)
  }
}

watch('packages', options, (_, name) => task(name))

let updating = false

async function task(name) {

  if (updating) return

  console.log('%s changed.', name)
  updating = true

  let execPromise

  // watch scss change
  if (name.endsWith('scss')) {
    console.log('building styles')
    execPromise = exec('npm run build:scss')
  } else {
    console.log('building typescript')
    execPromise = exec('npm run build:typescript')
  }

  try {
    const { stdout } = await execPromise
    console.log(stdout)
  } catch ({ stdout, stderr }) {
    console.log(stdout)
    console.log('ERROR:', stderr)
  }

  updating = false
  console.log('build complete')
}
