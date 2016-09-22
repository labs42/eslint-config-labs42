const { OFF, ERROR } = require('../const')

module.exports = {
    rules: {
        'comma-dangle': [ ERROR, 'only-multiline'],
        'semi': [ ERROR, 'never'],
        'indent': [ ERROR, 4, {
            'SwitchCase': 1,
            'VariableDeclarator': 1
        }],
        'padded-blocks': [ ERROR, 'always'],
        'max-len': [ ERROR, 120, 4, {
            'ignoreUrls': true,
            'ignoreComments': false
        }],
        'quotes': [ ERROR, 'single' ],
        'no-underscore-dangle': [ OFF ],
        'array-bracket-spacing': [ ERROR, 'always'],
        'newline-before-return': [ ERROR ],
        'no-multiple-empty-lines': [ ERROR, { 'max': 1 }]
    }
}