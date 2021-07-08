module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    '@react-native-community',
    'react-app',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'import',
    'babel',
    'react-native',
    'react',
    'react-hooks',
    'prettier'
  ],
  settings: {
    react: {
      version: '17'
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/']
      }
    }
  },
  rules: {
    semi: [2, 'never'],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'no-return-await': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 'error'
  }
}
