module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    compilerOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        resolveJsonModule: true
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    plugins: ['simple-import-sort'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
    }
}
