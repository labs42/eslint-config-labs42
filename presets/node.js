const baseRules = [
    'eslint:recommended',
].concat([
    '../src/rules/ava',
    '../src/rules/es6',
    '../src/rules/best-practices',
    '../src/rules/errors',
    '../src/rules/jsdoc',
    '../src/rules/node',
    '../src/rules/strict',
    '../src/rules/variables',
    '../src/rules/style',
].map(require.resolve))

module.exports = {
    parser: 'babel-eslint',
    env: {
        node: true
    },
    extends: baseRules,
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
    },
    rules: {
        strict: 2,
    },
}