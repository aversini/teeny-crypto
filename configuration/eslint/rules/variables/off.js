module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    "init-declarations": "off",
    // disallow catch clause parameters from shadowing variables in the outer scope
    "no-catch-shadow": "off",
    // disallow deleting variables
    "no-delete-var": "off",
    // disallow labels that share a name with a variable
    "no-label-var": "off",
    // disallow specified global variables
    "no-restricted-globals": "off",

    // disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow": "off",

    // disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": "off",
    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    "no-undef": "off",
    // disallow initializing variables to undefined
    "no-undef-init": "off",
    // disallow the use of undefined as an identifier
    "no-undefined": "warn",
    // disallow unused variables
    "no-unused-vars": "off",
    // disallow the use of variables before they are defined
    "no-use-before-define": "off",
  },
};
