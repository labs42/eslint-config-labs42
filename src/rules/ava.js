const { OFF, ERROR } = require('../const')

module.exports = {
    plugins: [
        'ava'
    ],
    rules: {
        'ava/assertion-arguments': [ ERROR ],
        'ava/assertion-message': [ OFF, 'always'],
        'ava/max-asserts': [ OFF, 5],
        'ava/no-cb-test': OFF,
        'ava/no-identical-title': [ ERROR ],
        'ava/no-ignored-test-files': [ OFF ],
        'ava/no-invalid-end': [ ERROR ],
        'ava/no-only-test': [ ERROR ],
        'ava/no-skip-assert': [ ERROR ],
        'ava/no-skip-test': [ ERROR ],
        'ava/no-statement-after-end':  [ ERROR ],
        'ava/no-todo-test': [ OFF ],
        'ava/no-unknown-modifiers': [ ERROR ],
        'ava/prefer-power-assert': OFF,
        'ava/test-ended': [ ERROR ],
        'ava/test-title': [ ERROR, 'if-multiple'],
        'ava/use-t-well': [ ERROR ],
        'ava/use-t': [ ERROR ],
        'ava/use-test': [ ERROR ],
        'ava/use-true-false': [ ERROR ],
    }
}