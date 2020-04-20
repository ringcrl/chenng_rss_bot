module.exports = {
    env: {
        node: true,
        commonjs: true,
        es6: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        camelcase: 'off',
        radix: ['error', 'as-needed'],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off'
    }
};
