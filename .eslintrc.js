module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "no-unused-vars": 1,
    "no-undef": 1,
    "no-console": 0,
    "react/display-name": 0
  },
  parserOptions: {
    sourceType: "module"
  }
};
