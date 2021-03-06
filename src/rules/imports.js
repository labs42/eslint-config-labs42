const { OFF, ERROR } = require('../const')

module.exports = {
    plugins: [
        'import'
    ],
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [ '.js', '.json' ]
            }
        },
        'import/extensions': [
            '.js',
            '.jsx',
        ],
        'import/core-modules': [
        ],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
    rules: {
        // Static analysis:

        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': [ ERROR, { commonjs: true } ],

        // ensure named imports coupled with named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
        'import/named': OFF,

        // ensure default import coupled with default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
        'import/default': OFF,

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        'import/namespace': OFF,

        // Helpful warnings:

        // disallow invalid exports, e.g. multiple defaults
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': ERROR,

        // do not allow a default import name to match a named export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        'import/no-named-as-default': ERROR,

        // warn on accessing default export property names that are also named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': ERROR,

        // disallow use of jsdoc-marked-deprecated imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        'import/no-deprecated': OFF,

        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': [ ERROR, {
            devDependencies: true,
            optionalDependencies: false,
        } ],

        // Forbid mutable exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        'import/no-mutable-exports': ERROR,

        // Module systems:

        // disallow require()
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        'import/no-commonjs': OFF,

        // disallow AMD require/define
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        'import/no-amd': ERROR,

        // No Node.js builtin modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        // TODO: enable?
        'import/no-nodejs-modules': OFF,

        // Style guide:

        // disallow non-import statements appearing before import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
        'import/imports-first': [ ERROR, 'absolute-first' ],

        // disallow duplicate imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': ERROR,

        // disallow namespace imports
        // TODO: enable?
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        'import/no-namespace': OFF,

        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        // TODO: enable when https://github.com/benmosher/eslint-plugin-import/issues/390 is resolved
        'import/extensions': [ OFF, 'never' ],

        // Enforce a convention in module import order
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        // TODO: enable?
        'import/order': [ OFF, {
            groups: [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
            'newlines-between': 'never',
        } ],

        // Require a newline after the last import/require in a group
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        'import/newline-after-import': ERROR,

        // Require modules with a single export to use a default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'import/prefer-default-export': OFF,

        // Restrict which files can be imported in a given folder
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        'import/no-restricted-paths': OFF,

        // Forbid modules to have too many dependencies
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        'import/max-dependencies': [ OFF, { max: 10 } ],

        // Forbid import of modules using absolute paths
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        // TODO: enable, semver-major
        'import/no-absolute-path': [ OFF ],
    },
}