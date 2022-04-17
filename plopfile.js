// eslint-disable-next-line import/no-default-export
module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the component?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'The name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/index.ts',
        templateFile: '.plop/templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: '.plop/templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.styles.ts',
        templateFile: '.plop/templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: '.plop/templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.test.tsx',
        templateFile: '.plop/templates/test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/types.ts',
        templateFile: '.plop/templates/types.ts.hbs',
      },
    ],
  })
}
