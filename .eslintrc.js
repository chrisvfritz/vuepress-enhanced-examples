module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script',
  },
  extends: [
    'plugin:vue-libs/recommended',
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
  ],
  plugins: ['node'],
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.PRE_COMMIT
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',
  },
  overrides: [
    {
      files: ['.vuepress/components/**/*', '.vuepress/store.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
    },
  ],
}
