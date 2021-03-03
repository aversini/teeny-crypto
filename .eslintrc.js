module.exports = {
  extends: ["./configuration/eslint/index.js", "prettier"],
  rules: {
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        comments: 110,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
