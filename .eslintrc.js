module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
  },
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-unused-vars": 0,
  },
};
