const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['react', 'import'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'comma-dangle': off,
    'function-paren-newline': off,
    'global-require': off,
    'implicit-arrow-linebreak': off,
    'import/extensions': off,
    'import/no-deprecated': off,
    'import/no-dynamic-require': off,
    'import/no-unresolved': off,
    'import/no-webpack-loader-syntax': off,
    'import/prefer-default-export': off,
    'indent': off,
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': off,
    'jsx-a11y/heading-has-content': off,
    'jsx-a11y/href-no-hash': off,
    'jsx-a11y/label-has-for': off,
    'jsx-a11y/label-has-associated-control': off,
    'jsx-a11y/mouse-events-have-key-events': off,
    'jsx-a11y/no-autofocus': off,
    'linebreak-style': off,
    'max-len': off,
    'no-console': off,
    'no-lonely-if': off,
    'no-multiple-empty-lines': off,
    'no-implicit-coercion': off,
    'no-shadow': off,
    'no-underscore-dangle': off,
    'no-unused-vars': off,
    'object-curly-newline': off,
    'prefer-spread': off,
    'react/jsx-filename-extension': off,
    'react/jsx-no-target-blank': off,
    'react/no-typos': off,
    'react/no-unescaped-entities': off,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      globalReturn: false,
      experimentalObjectRestSpread: true,
    },
    babelOptions: {
      configFile: '.babelrc.js',
    },
  },
  overrides: [
    {
      files: ['gatsby-node.js'],
      rules: {
        'import/no-extraneous-dependencies': off,
      },
    },
    {
      files: ['src/components/Resume/index.jsx', 'src/components/Portfolio/index.jsx', 'src/components/Post/index.jsx', 'src/templates/*.jsx'],
      rules: {
        'react/no-danger': off,
      },
    },
    {
      files: ['src/html.jsx'],
      rules: {
        'react/prefer-stateless-function': off,
        'react/prop-types': off,
        'react/no-danger': off,
      },
    },
    {
      files: ['src/**/*.test.js'],
      rules: {},
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.5',
    }
  }
};
