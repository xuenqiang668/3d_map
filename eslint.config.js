import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  // TypeScript and Vue are autoetected, you can also explicitly enable them:
  typescript: true,
  javascript: true,
  vue: true,
  ignores: [
    '**/node_modules/**',
  ],
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
  },
  formatters: {
    html: true,
  },
})
