module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/no-empty-interface": 0,
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
       "assignment": "parens-new-line",
       "return": "parens-new-line",
       "arrow": "parens-new-line",
       "condition": "parens-new-line",
       "logical": "parens-new-line",
       "prop": "parens-new-line"
     },
   ]
  },
};
