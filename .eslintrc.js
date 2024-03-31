module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'jest/globals': true,
    },
    extends: ['airbnb-base', 'plugin:jest/recommended', 'plugin:jest/style', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['jest'],
    settings: {
        'import/resolver': {
            webpack: {
                config: './webpack/webpack.common.js',
            },
        },
    },
    rules: {
        'object-curly-newline': 'off',
        indent: ['warn', 4],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreComments: true, // "comments": 80
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
    },
};
