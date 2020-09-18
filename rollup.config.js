import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'demos/index.js',
  output: {
    format: 'umd',
    file: '_site/index.js',
  },
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }
  },
  plugins: [
    nodeResolve(),
    commonjs(),
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
