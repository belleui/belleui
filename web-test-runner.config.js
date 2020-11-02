/**
 * https://modern-web.dev/docs/test-runner/overview/
 */
const { playwrightLauncher } = require('@web/test-runner-playwright');

module.exports = {
  files: ['packages/*/__test__/*.test.js'],
  nodeResolve: true,
  concurrency: 5,
  coverage: true,
  coverageConfig: {
    report: true,
    reportDir: 'coverage',
    exclude: [
      'packages/*/stories/*',
      'test/**',
    ],
    threshold: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    }
  },
  testRunnerHtml: (testRunnerImport) => `
    <html>
    <head></head>
    <body>
      <script type="module">
      import '${testRunnerImport}';
      window.process = window.process || {};
      window.process.env = window.process.env || {};
      window.process.env.NODE_ENV = window.process.env.NODE_ENV || 'production';
      </script>
    </body>
    </html>
  `,
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        args: ['--no-sandbox']
      }
    })
  ]
}
