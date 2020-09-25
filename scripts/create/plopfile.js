const chalk = require('chalk')

module.exports = function (plop) {
  plop.setHelper('splitName', function (name) {
    const rootName = name.data.root.name
    const splitName = rootName.split('-')[1]
    const capitalized = splitName.charAt(0).toUpperCase() + splitName.substring(1)
    return capitalized
  })
  plop.setHelper('cname', function (name) {
    const rootName = name.data.root.name
    const camel = rootName.replace(/-([a-z])/g, (g) => {
      return g[1].toUpperCase()
    })
    const capitalized = camel.charAt(0).toUpperCase() + camel.substring(1)
    return capitalized
  })
  plop.setGenerator('component', {
    description: 'application controller logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please',
      validate: input => {
        if (!input.startsWith('belle-')) {
          return `Component name should start with: ${chalk.red('belle-')}`
        }
        return true
      }
    }],
    actions: [
      {
        type: 'add',
        path: '../../packages/{{name}}/src/{{name}}.ts',
        templateFile: 'templates/component.ts.hbs',
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/src/{{name}}.scss',
        templateFile: 'templates/component.scss',
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/stories/{{name}}.stories.ts',
        templateFile: 'templates/stories.ts.hbs',
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/.npmignore',
        templateFile: 'templates/.npmignore',
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/package.json',
        templateFile: 'templates/package.json.hbs',
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/tsconfig.json',
        templateFile: 'templates/tsc.json',
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/__test__/{{name}}.test.ts',
        templateFile: 'templates/component.test.ts.hbs',
      }
    ]
  })
}
