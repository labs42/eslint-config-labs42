const {OFF, ERROR} = require('../const')

module.exports = {
    'env': {
        'node': true
    },
    'plugins': [
        'import'
    ],
    'rules': {
        // enforce return after a callback
        'callback-return': OFF,
        // require all requires be top-level
        // http://eslint.org/docs/rules/global-require
        'global-require': ERROR,
        // enforces error handling in callbacks (node environment)
        'handle-callback-err': OFF,
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': [ OFF, false ],
        // disallow use of new operator with the require function
        'no-new-require': OFF,
        // disallow string concatenation with __dirname and __filename
        'no-path-concat': OFF,
        // disallow process.exit()
        'no-process-exit': OFF,
        // restrict usage of specified node modules
        'no-restricted-modules': OFF,
        // disallow use of synchronous methods (off by default)
        'no-sync': OFF,
        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': [ ERROR, {'commonjs': true} ]
    },
    'settings': {
        'import/resolver': {
            'node': {
                'extensions': [ '.js', '.json' ]
            }
        }
    }
}
