const { OFF, ERROR } = require('../const')

module.exports = {
    'env': {
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'generators': false,
            'objectLiteralDuplicateProperties': false
        }
    },
    'plugins': [
        'import'
    ],
    'settings': {
        'import/resolver': {
            'node': {
                'extensions': [ '.js', '.json' ]
            }
        }
    },
    'rules': {
        // enforces no braces where they can be omitted
        // http://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': [ ERROR, 'as-needed' ],
        // require parens in arrow function arguments
        'arrow-parens': OFF,
        // require space before/after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': [ ERROR, {'before': true, 'after': true} ],
        // require trailing commas in multiline object literals
        'comma-dangle': [ ERROR, 'always-multiline' ],
        // verify super() callings in constructors
        'constructor-super': OFF,
        // enforce the spacing around the * in generator functions
        'generator-star-spacing': OFF,
        // disallow modifying variables of class declarations
        // http://eslint.org/docs/rules/no-class-assign
        'no-class-assign': ERROR,
        // disallow arrow functions where they could be confused with comparisons
        // http://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': [ ERROR, {
            'allowParens': true,
        } ],
        // disallow modifying variables that are declared using const
        'no-const-assign': ERROR,
        // disallow duplicate class members
        // http://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': ERROR,
        // disallow importing from the same path more than once
        // http://eslint.org/docs/rules/no-duplicate-imports
        'no-duplicate-imports': ERROR,
        // disallow symbol constructor
        // http://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': ERROR,
        // disallow specific globals
        'no-restricted-globals': OFF,
        // disallow specific imports
        // http://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': OFF,
        // disallow to use this/super before super() calling in constructors.
        'no-this-before-super': OFF,
        // require let or const instead of var
        'no-var': ERROR,
        // disallow useless computed property keys
        // http://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': ERROR,
        // disallow unnecessary constructor
        // http://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': ERROR,
        // require method and property shorthand syntax for object literals
        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': [ ERROR, 'always' ],
        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': [ ERROR, {
            'allowNamedFunctions': false,
            'allowUnboundThis': true,
        } ],
        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': ERROR,
        // suggest using the spread operator instead of .apply()
        'prefer-spread': OFF,
        // suggest using Reflect methods where applicable
        'prefer-reflect': OFF,
        // use rest parameters instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': ERROR,
        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': ERROR,
        // disallow generator functions that do not have yield
        'require-yield': OFF,
        // import sorting
        // http://eslint.org/docs/rules/sort-imports
        'sort-imports': OFF,
        // enforce usage of spacing in template strings
        // http://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': ERROR,
        // enforce spacing around the * in yield* expressions
        // http://eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': [ ERROR, 'after' ],
        // disallow invalid exports, e.g. multiple defaults
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': ERROR,
        // ensure default import coupled with default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
        'import/default': OFF,
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        // TODO: enable
        'import/extensions': [ OFF, 'never' ],
        // ensure named imports coupled with named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
        'import/named': OFF,
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        'import/namespace': OFF,
        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // TODO: enable
        'import/no-extraneous-dependencies': [ OFF, {
            'devDependencies': false,
            'optionalDependencies': false,
        } ],
        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': [ ERROR, {'commonjs': true} ],
        // do not allow a default import name to match a named export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        // TODO: enable
        'import/no-named-as-default': OFF,
        // disallow require()
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        'import/no-commonjs': OFF,
        // disallow AMD require/define
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        'import/no-amd': ERROR,
        // disallow non-import statements appearing before import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
        // TODO: enable?
        'import/imports-first': [ OFF, 'absolute-first' ],
        // disallow duplicate imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': ERROR,
        // disallow use of jsdoc-marked-deprecated imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        'import/no-deprecated': OFF,
        // disallow namespace imports
        // TODO: enable?
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        'import/no-namespace': OFF,
        // warn on accessing default export property names that are also named exports
        // TODO: enable?
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': OFF,
        // No Node.js builtin modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        'import/no-nodejs-modules': OFF,
        // Enforce a convention in module import order
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        // TODO: enable?
        'import/order': [ OFF, {
            'groups': [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
            'newlines-between': 'never',
        } ],
        // Require a newline after the last import/require in a group
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        // TODO: enable
        'import/newline-after-import': OFF,
        // Forbid mutable exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        'import/no-mutable-exports': ERROR,
    },
}
