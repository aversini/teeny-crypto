module.exports = {
  rules: {
    // enforces no braces where they can be omitted
    "arrow-body-style": "off",
    // require parens in arrow function arguments
    "arrow-parens": "off",
    // require space before/after arrow function's arrow
    "arrow-spacing": "off",
    // verify super() callings in constructors
    "constructor-super": "off",
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": "off",
    // disallow modifying variables of class declarations
    "no-class-assign": "off",
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": "off",
    // disallow modifying variables that are declared using const
    "no-const-assign": "off",
    // disallow duplicate class members
    "no-dupe-class-members": "off",
    // disallow importing from the same path more than once
    "no-duplicate-imports": "off",
    // disallow symbol constructor
    "no-new-symbol": "off",
    // disallow specific imports
    "no-restricted-imports": "off",
    // disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "off",
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": "off",
    // disallow useless computed property keys
    "no-useless-computed-key": "off",
    // disallow unnecessary constructor
    "no-useless-constructor": "off",
    /*
     * disallow renaming import, export, and destructured assignments
     * to the same name
     */
    "no-useless-rename": "off",
    // require let or const instead of var
    "no-var": "off",
    // require method and property shorthand syntax for object literals
    "object-shorthand": "off",
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": "off",
    /*
     * suggest using of const for variables that are never modified
     * after declared
     */
    "prefer-const": "off",
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "off",
    // use object spread instead of Object.assign
    "prefer-object-spread": "off",
    // use rest parameters instead of arguments
    "prefer-rest-params": "off",
    // suggest using the spread operator instead of .apply()
    "prefer-spread": "off",
    // suggest using template literals instead of string concatenation
    "prefer-template": "off",
    // disallow generator functions that do not have yield
    "require-yield": "off",
    // enforce spacing between object rest-spread
    "rest-spread-spacing": "off",
    // import sorting
    "sort-imports": "off",
    // require a Symbol description
    "symbol-description": "off",
    // enforce usage of spacing in template strings
    "template-curly-spacing": "off",
    // enforce spacing around the * in yield* expressions
    "yield-star-spacing": "off",
  },
};
