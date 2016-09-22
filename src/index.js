module.exports = {
    parser: 'babel-eslint',
    configs: {
        node: {
            env: {
                node: true
            },
            extends: [
                'eslint:recommended',
                './rules/ava',
                './rules/es6',
                './rules/best-practices',
                './rules/errors',
                './rules/jsdoc',
                './rules/node',
                './rules/strict',
                './rules/variables',
                './rules/style',
            ].map(require.resolve),
            parserOptions: {
                ecmaVersion: 7,
                sourceType: 'module',
            },
            rules: {
                strict: 2,
            }
        },
        browser: {
            env: {
                browser: true
            }
        },
    }
}