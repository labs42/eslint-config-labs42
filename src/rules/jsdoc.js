const { ERROR } = require('../const')

module.exports = {
    rules: {
        'require-jsdoc': [ ERROR, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true
            }
        }],
        'valid-jsdoc': [ ERROR, {
            'requireParamDescription': false,
            'requireReturnDescription': false,
            'requireReturnType': true,
            'prefer': {
                'arg': 'param',
                'argument': 'param',
                'class': 'constructor',
                'return': 'returns',
                'virtual': 'abstract',
            },
            'preferType': {
                'Boolean': 'boolean',
                'Number': 'number',
                'String': 'string',
                'object': 'Object',
                'array': 'Array',
                'function': 'Function',
            }
        }],
    }
}