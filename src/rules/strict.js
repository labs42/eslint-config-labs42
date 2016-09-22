const { ERROR } = require('../const')

module.exports = {
    'rules': {
    // babel inserts `'use strict';` for us
        'strict': [ ERROR, 'never' ]
    }
}
