module.exports = {
  files: ['packages/*/__test__/*.test.js'],
  nodeResolve: true,
  concurrency: 5,
  testRunnerHtml: (testRunnerImport) =>`
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
  `
}
