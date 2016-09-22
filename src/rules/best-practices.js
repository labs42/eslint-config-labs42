const { OFF, WARN, ERROR } = require('../const')

module.exports = {
    'rules': {
        // enforces getter/setter pairs in objects
        'accessor-pairs': OFF,
        // enforces return statements in callbacks of array's methods
        // http://eslint.org/docs/rules/array-callback-return
        'array-callback-return': ERROR,
        // treat var statements as if they were block scoped
        'block-scoped-var': ERROR,
        // specify the maximum cyclomatic complexity allowed in a program
        'complexity': [ OFF, 11],
        // require return statements to either always or never specify values
        'consistent-return': OFF,
        // specify curly brace conventions for all control statements
        'curly': [ ERROR, 'multi-line'],
        // require default case in switch statements
        'default-case': [ ERROR, { 'commentPattern': '^no default$' }],
        // encourages use of dot notation whenever possible
        'dot-notation': [ ERROR, { 'allowKeywords': true }],
        // enforces consistent newlines before or after dots
        'dot-location': OFF,
        // require the use of === and !==
        // http://eslint.org/docs/rules/eqeqeq
        'eqeqeq': [ ERROR, 'allow-null'],
        // make sure for-in loops have an if statement
        'guard-for-in': ERROR,
        // Blacklist certain identifiers to prevent them being used
        // http://eslint.org/docs/rules/id-blacklist
        'id-blacklist': OFF,
        // disallow the use of alert, confirm, and prompt
        'no-alert': WARN,
        // disallow use of arguments.caller or arguments.callee
        'no-caller': ERROR,
        // disallow lexical declarations in case/default clauses
        // http://eslint.org/docs/rules/no-case-declarations.html
        'no-case-declarations': ERROR,
        // disallow division operators explicitly at beginning of regular expression
        'no-div-regex': OFF,
        // disallow else after a return in an if
        'no-else-return': ERROR,
        // disallow empty functions, except for standalone funcs/arrows
        // http://eslint.org/docs/rules/no-empty-function
        'no-empty-function': [ ERROR, {
            'allow': [
                'arrowFunctions',
                'functions',
                'methods',
            ]
        }],
        // disallow empty destructuring patterns
        // http://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': ERROR,
        // disallow Unnecessary Labels
        // http://eslint.org/docs/rules/no-extra-label
        'no-extra-label': ERROR,
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': OFF,
        // disallow use of eval()
        'no-eval': ERROR,
        // disallow adding to native types
        'no-extend-native': ERROR,
        // disallow unnecessary function binding
        'no-extra-bind': ERROR,
        // disallow fallthrough of case statements
        'no-fallthrough': ERROR,
        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': ERROR,
        // disallow the type conversions with shorter notations
        'no-implicit-coercion': OFF,
        // disallow use of eval()-like methods
        'no-implied-eval': ERROR,
        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': OFF,
        // disallow usage of __iterator__ property
        'no-iterator': ERROR,
        // disallow use of labels for anything other then loops and switches
        'no-labels': [ ERROR, { 'allowLoop': false, 'allowSwitch': false }],
        // disallow unnecessary nested blocks
        'no-lone-blocks': ERROR,
        // disallow creation of functions within loops
        'no-loop-func': ERROR,
        // disallow magic numbers
        // http://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': [ OFF, {
            'ignore': [],
            'ignoreArrayIndexes': true,
            'enforceConst': true,
            'detectObjects': false,
        }],
        // disallow use of multiple spaces
        'no-multi-spaces': ERROR,
        // disallow use of multiline strings
        'no-multi-str': ERROR,
        // disallow reassignments of native objects
        'no-native-reassign': ERROR,
        // disallow use of new operator when not part of the assignment or comparison
        'no-new': ERROR,
        // disallow use of new operator for Function object
        'no-new-func': ERROR,
        // disallows creating new instances of String, Number, and Boolean
        'no-new-wrappers': ERROR,
        // disallow use of (old style) octal literals
        'no-octal': ERROR,
        // disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        'no-octal-escape': ERROR,
        // disallow reassignment of function parameters
        // disallow parameter object manipulation
        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': [ WARN, { 'props': false }],
        // disallow use of process.env
        'no-process-env': OFF,
        // disallow usage of __proto__ property
        'no-proto': ERROR,
        // disallow declaring the same variable more then once
        'no-redeclare': ERROR,
        // disallow certain syntax forms
        // http://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            2,
            'DebuggerStatement',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        // disallow use of assignment in return statement
        'no-return-assign': ERROR,
        // disallow use of `javascript:` urls.
        'no-script-url': ERROR,
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': ERROR,
        // disallow use of comma operator
        'no-sequences': ERROR,
        // restrict what can be thrown as an exception
        'no-throw-literal': ERROR,
        // disallow unmodified conditions of loops
        // http://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': OFF,
        // disallow return/throw/break/continue inside finally blocks
        // http://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': ERROR,
        // disallow usage of expressions in statement position
        'no-unused-expressions': ERROR,
        // disallow unused labels
        // http://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': ERROR,
        // disallow unnecessary .call() and .apply()
        'no-useless-call': OFF,
        // disallow useless string concatenation
        // http://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': ERROR,
        // disallow unnecessary string escaping
        // http://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': ERROR,
        // disallow use of void operator
        'no-void': OFF,
        // disallow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': [ OFF, { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
        // disallow use of the with statement
        'no-with': ERROR,
        // require use of the second argument for parseInt()
        'radix': ERROR,
        // requires to declare all vars on top of their containing scope
        'vars-on-top': ERROR,
        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife.html
        'wrap-iife': [ ERROR, 'outside'],
        // require or disallow Yoda conditions
        'yoda': ERROR,
    }
};
