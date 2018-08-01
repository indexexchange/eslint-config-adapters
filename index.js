module.exports = {
    'extends': [
        'eslint-config-base/4.13.1/main',
        'eslint-config-base/4.13.1/possible-errors',
        'eslint-config-base/4.13.1/best-practices',
        'eslint-config-base/4.13.1/strict-mode',
        'eslint-config-base/4.13.1/variables',
        'eslint-config-base/4.13.1/nodejs-and-commonjs',
        'eslint-config-base/4.13.1/stylistic-issues'
    ],

    'parserOptions': {
        'ecmaVersion': 5,

        'sourceType': 'script',

        'ecmaFeatures': {
            'impliedStrict': false
        }
    },

    'env': {
        'browser': true,
        'commonjs': true
    },

    'rules': {
        'complexity': ['off'],
        'no-implicit-globals': ['off'],
        'no-inner-declarations': ['error', 'functions'],
        'no-magic-numbers': ['off'],
        'no-var': ['off'],
        'no-param-reassign': ['off'],
        'multiline-comment-style': ['off'],
        'init-declarations': ['off'],
        'func-names': ['off'],
        'spaced-comment': [
            'error',
            'always',
            {
                'line': {
                    'markers': ['?'],
                    'exceptions': ['/']
                },
                'block': {
                    'markers': ['*', '?'],
                    'balanced': true
                }
            }
        ],
        'valid-jsdoc': ['off'],
        'require-jsdoc': ['off'],
        'new-cap': ['off']
    }
};
