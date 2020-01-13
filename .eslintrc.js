module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: [
        'html'
    ],
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4
        ],
        semi: [2, 'never'],
        'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'comma-dangle': ['error', 'never'],
        allowForLoopAfterthoughts: true,
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'max-len': [2, 200, 4]
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    }
}
