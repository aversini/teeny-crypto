/* eslint no-magic-numbers: 0 */
module.exports = {
  rules: {
    // enforce getter and setter pairs in objects
    "accessor-pairs": "off",
    // enforce return statements in callbacks of array methods
    "array-callback-return": "off",
    // enforce the use of variables within the scope they are defined
    "block-scoped-var": "off",
    // enforce that class methods utilize this
    "class-methods-use-this": "off",
    // enforce a maximum cyclomatic complexity allowed in a program
    complexity: "off",
    // require return statements to either always or never specify values
    "consistent-return": "off",
    // enforce consistent brace style for all control statements
    curly: "off",
    // require default cases in switch statements
    "default-case": "off",
    // enforce consistent newlines before and after dots
    "dot-location": "off",
    // enforce dot notation whenever possible
    "dot-notation": "off",
    // require the use of === and !==
    eqeqeq: "off",
    // require for-in loops to include an if statement
    "guard-for-in": "off",
    // disallow the use of alert, confirm, and prompt
    "no-alert": "off",
    // disallow the use of arguments.caller or arguments.callee
    "no-caller": "off",
    // disallow lexical declarations in case clauses
    "no-case-declarations": "off",
    // disallow division operators explicitly at the beginning of regular expressions
    "no-div-regex": "off",
    // disallow else blocks after return statements in if statements
    "no-else-return": "off",
    // disallow empty functions
    "no-empty-function": "off",
    // disallow empty destructuring patterns
    "no-empty-pattern": "off",
    // disallow null comparisons without type-checking operators
    "no-eq-null": "off",
    // disallow the use of eval()
    "no-eval": "off",
    // disallow extending native types
    "no-extend-native": "off",
    // disallow unnecessary calls to .bind()
    "no-extra-bind": "off",
    // disallow unnecessary labels
    "no-extra-label": "off",
    // disallow fallthrough of case statements
    "no-fallthrough": "off",
    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": "off",
    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "off",
    // disallow shorthand type conversions
    "no-implicit-coercion": "off",
    // disallow variable and function declarations in the global scope
    "no-implicit-globals": "off",
    // disallow the use of eval()-like methods
    "no-implied-eval": "off",
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "off",
    // disallow the use of the __iterator__ property
    "no-iterator": "off",
    // disallow labeled statements
    "no-labels": "off",
    // disallow unnecessary nested blocks
    "no-lone-blocks": "off",
    // disallow function declarations and expressions inside loop statements
    "no-loop-func": "off",
    // disallow magic numbers
    "no-magic-numbers": "off",
    // disallow multiple spaces
    "no-multi-spaces": "off",
    // disallow multiline strings
    "no-multi-str": "off",

    // disallow new operators outside of assignments or comparisons
    "no-new": "off",

    // disallow new operators with the Function object
    "no-new-func": "off",

    // disallow new operators with the String, Number, and Boolean objects
    "no-new-wrappers": "off",
    "no-obj-calls": "off",

    // disallow octal literals
    "no-octal": "off",

    // disallow octal escape sequences in string literals
    "no-octal-escape": "off",
    // disallow reassigning function parameters
    "no-param-reassign": "off",
    // disallow the use of the __proto__ property
    "no-proto": "off",
    // disallow variable redeclaration
    "no-redeclare": "off",
    // disallow certain properties on certain objects
    "no-restricted-properties": "off",
    // disallow assignment operators in return statements
    "no-return-assign": "off",
    // disallow javascript: urls
    "no-script-url": "off",
    // disallow assignments where both sides are exactly the same
    "no-self-assign": "off",
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "off",
    // disallow comma operators
    "no-sequences": "off",
    // disallow throwing literals as exceptions
    "no-throw-literal": "off",
    // disallow unmodified loop conditions
    "no-unmodified-loop-condition": "off",
    // disallow unused expressions
    "no-unused-expressions": "off",
    // disallow unused labels
    "no-unused-labels": "off",
    // disallow unnecessary calls to .call() and .apply()
    "no-useless-call": "off",
    // Disallow unnecessary concatenation of strings
    "no-useless-concat": "off",
    // disallow unnecessary escape characters
    "no-useless-escape": "off",
    // disallow redundant return statements
    "no-useless-return": "off",
    // disallow void operators
    "no-void": "off",
    // disallow specified warning terms in comments
    "no-warning-comments": "off",
    // disallow with statements
    "no-with": "off",
    // enforce the consistent use of the radix argument when using parseInt()
    radix: "off",
    // require var declarations be placed at the top of their containing scope
    "vars-on-top": "off",
    // require parentheses around immediate function invocations
    "wrap-iife": "off",
    // require or disallow “Yoda” conditions
    yoda: "off",
  },
};
