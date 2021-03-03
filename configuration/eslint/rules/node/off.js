module.exports = {
  rules: {
    // require return statements after callbacks
    "callback-return": "off",
    // require require() calls to be placed at top-level module scope
    "global-require": "off",
    // require error handling in callbacks
    "handle-callback-err": "off",
    // disallow require calls to be mixed with regular variable declarations
    "no-mixed-requires": "off",
    // disallow new operators with calls to require
    "no-new-require": "off",
    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "off",
    // disallow the use of process.env
    "no-process-env": "off",
    // disallow the use of process.exit()
    "no-process-exit": "off",
    // disallow specified modules when loaded by require
    "no-restricted-modules": "off",
    // disallow synchronous methods
    "no-sync": "off",
  },
};
