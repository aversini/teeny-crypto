module.exports = {
  env: {
    browser: false,
    builtin: true,
    es6: true,
    mocha: true,
  },
  extends: [
    "./rules/reset.js",
    "./rules/style/on.js",
    "./rules/best-practices/on.js",
    "./rules/possible-errors/on.js",
    "./rules/variables/on.js",
    "./rules/es6/on.js",
    "./rules/node/on.js",
  ],
  globals: {
    chai: false,
    jest: false,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["sort-keys-fix"],
  root: true,
  rules: {
    "sort-keys-fix/sort-keys-fix": [
      "warn",
      "asc",
      {
        natural: true,
      },
    ],
  },
};
