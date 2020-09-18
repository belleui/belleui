import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'

export default {
  input: 'demos/index.js',
  output: {
    file: '_site/index.js',
  },
  plugins: [
    resolve(),
    terser(),
    copy({
      targets: [
        {
          src: 'demos/index.html',
          dest: '_site'
        }
      ]
    })
  ]
}
