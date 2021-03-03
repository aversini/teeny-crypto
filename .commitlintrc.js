module.exports = {
  rules: {
    "body-leading-blank": [1, "never"],
    "footer-leading-blank": [1, "never"],
    "header-max-length": [2, "always", 100],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "private",
        "refactor",
        "revert",
        "sync"
      ]
    ]
  }
};
