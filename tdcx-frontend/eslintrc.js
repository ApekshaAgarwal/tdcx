module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'react', 'react-hooks'],
  globals: {
    React: true,
    JSX: true
  },
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 80,

        endOfLine: 'auto'
      }
    ],
    // eqeqeq: 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    '@typescript-eslint/ban-types': 'off',
    'new-cap': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'import/order': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-typos': 'off',
    'no-plusplus': 'off',
    'import/no-named-as-default': 'off',
    'react/no-array-index-key': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'warn',
    'max-len': 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'camelcase': 'off',
    'import/no-cycle': 'warn',
    'no-case-declarations': 'off',
    'global-require': 'off',
    'react/no-unused-prop-types': 'warn',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'warn',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'prefer-rest-params': 'off',
    'no-undef': 'error',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-expressions': 'off'
  }
};
