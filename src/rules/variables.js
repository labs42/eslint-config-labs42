const { OFF, ERROR } = require('../const')

module.exports = {
    'rules': {
        // enforce or disallow variable initializations at definition
        'init-declarations': OFF,
        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': OFF,
        // disallow deletion of variables
        'no-delete-var': ERROR,
        // disallow var and named functions in global scope
        // http://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': OFF,
        // disallow labels that share a name with a variable
        'no-label-var': OFF,
        // disallow self assignment
        // http://eslint.org/docs/rules/no-self-assign
        'no-self-assign': ERROR,
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': ERROR,
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': ERROR,
        // disallow use of undefined when initializing variables
        'no-undef-init': OFF,
        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': ERROR,
        // disallow use of undefined variable
        'no-undefined': OFF,
        // disallow declaration of variables that are not used in the code
        'no-unused-vars': [ ERROR, {'vars': 'local', 'args': 'after-used'} ],
        // disallow use of variables before they are defined
        'no-use-before-define': ERROR,
    }
}
