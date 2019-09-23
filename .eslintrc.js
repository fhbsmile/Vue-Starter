require('@babel/register');

exports.module = {
  "plugins": [
    "vue",
    "flowtype",
    // "prettier"
  ],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "globals": {},
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:flowtype/recommended",
    // "prettier",
    // "prettier/vue",
    // "prettier/flowtype"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  },
  "rules": {
    // Plugins
    // "prettier/prettier": "error",

    "import/extensions": ["error", "always", { "js": "never", "vue": "never" }],
    "import/prefer-default-export": "off",

    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",

    // Possible Errors

    // Best Practices
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["context", "state", "acc", "event"] }],

    // Variables

    // Node.js and CommonJS

    // Stylistic Issues
    "max-len": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "object-curly-newline": ["error", { "consistent": true }]

    // JS.Next
  }
}