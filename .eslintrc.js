module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: [
        'react'
    ],
    rules: {
        quotes: ['error', 'single'],
        // we want to force semicolons
        semi: ['error', 'always'],
        // we use 2 spaces to indent our code
        indent: ['error', 4],
        // we want to avoid extraneous spaces
        'no-multi-spaces': ['error']
    }
};
