import merge from 'deepmerge'
import { createSpaConfig } from '@open-wc/building-rollup'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import typescript from '@rollup/plugin-typescript'
import path from 'path'

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  outputDir: '_site',

  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  // legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
})

export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  input: path.resolve(__dirname, 'index.html'),
  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',
})
