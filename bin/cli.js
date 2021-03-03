#!/usr/bin/env node

const fs = require("fs-extra");
const meow = require("meow");
const path = require("path");
const { red } = require("kleur");
const {
  displayErrorMessages,
  meowOptionsHelper,
  meowParserHelper,
  upperFirst,
} = require("teeny-js-utilities");
const PrettyError = require("pretty-error");
const TeenyLogger = require("teeny-logger");

const logger = new TeenyLogger({
  boring: process.env.NODE_ENV === "test",
});

const {
  displayConfirmation,
  displayPromptWithPassword,
  processFileWithPassword,
  shouldContinue,
} = require("../src/utilities");

const pe = new PrettyError();
/**
 * Automatically prettifying all exceptions
 * that are logged.
 */
pe.start();

const ENCRYPT = "encrypt";
const DECRYPT = "decrypt";

const { helpText, options } = meowOptionsHelper({
  flags: {
    decrypt: {
      alias: "d",
      description: `${upperFirst(DECRYPT)} a password protected file`,
      type: "boolean",
    },
    encrypt: {
      alias: "e",
      description: `${upperFirst(ENCRYPT)} a file with a password`,
      type: "boolean",
    },
    help: {
      alias: "h",
      description: "Display help instructions",
      type: "boolean",
    },
    version: {
      alias: "v",
      description: "Output the current version",
      type: "boolean",
    },
  },
  parameters: {
    input: {
      description: `The file to ${ENCRYPT} or ${DECRYPT}`,
    },
    output: {
      default: "Standard output",
      description: `The file to create to save the result of the ${ENCRYPT}ing/${DECRYPT}ing`,
    },
  },
  usage: true,
});

/**
 * Interpret the options passed by the user.
 */
const cli = meow(helpText, options);
meowParserHelper({
  cli,
  restrictions: [
    {
      exit: 1,
      message: () =>
        red(
          `\nError: either --${ENCRYPT} or --${DECRYPT} option must be provided.`
        ),
      test: (x) => x.encrypt === false && x.decrypt === false,
    },
    {
      exit: 1,
      message: () =>
        red(
          `\nError: either --${ENCRYPT} or --${DECRYPT} option must be provided, but not both.`
        ),
      test: (x) => x.encrypt === true && x.decrypt === true,
    },
  ],
});

/**
 * Caching the "action" for future usage (encrypt or decrypt).
 */
const actionName = cli.flags.encrypt ? ENCRYPT : DECRYPT;

/**
 * Extracting the input and output files.
 */
let inputFile,
  outputFile,
  outputFileExists = false;
if (cli.input.length) {
  inputFile = cli.input[0];
  outputFile = cli.input[1];
  if (!fs.existsSync(inputFile)) {
    displayErrorMessages([`File ${inputFile} does not exist!`]);
  }
  if (fs.existsSync(outputFile)) {
    outputFileExists = true;
  }
}

/**
 * Processing the file!
 */
(async () => {
  if (outputFileExists) {
    const goodToGo = await displayConfirmation(
      `The file ${outputFile} already exists, do you want to overwrite it?`
    );
    shouldContinue(goodToGo);
  }

  const password = await displayPromptWithPassword(
    `Enter password to ${actionName} the file`
  );

  try {
    await processFileWithPassword(
      cli.flags.encrypt,
      inputFile,
      outputFile,
      password
    );
    logger.log();
    logger.info(`File ${path.basename(inputFile)} was ${actionName}ed.`);
    if (outputFileExists) {
      logger.info(`The result was saved in the file ${outputFile}`);
    }
  } catch (e) {
    logger.error(e);
  }
})();
