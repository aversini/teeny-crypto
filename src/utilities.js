const fs = require("fs");
const inquirer = require("inquirer");
const TeenyLogger = require("teeny-logger");
const crypto = require("crypto");
const { promisify } = require("util");

const CRYPTO_ALGO = "aes-256-ctr";
const HASH_ALGO = "md5";
const BYTES_FOR_IV = 16;
const HEX = "hex";
const UTF8 = "utf8";
const FILE_ENCODING = UTF8;

const logger = new TeenyLogger({
  boring: process.env.NODE_ENV === "test",
});

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

/* istanbul ignore next */
const displayConfirmation = async (msg) => {
  const questions = {
    default: true,
    message: msg || "Do you want to continue?",
    name: "goodToGo",
    type: "confirm",
  };
  logger.log();
  const answers = await inquirer.prompt(questions);
  return answers.goodToGo;
};

/* istanbul ignore next */
const displayPromptWithPassword = async (msg) => {
  const questions = {
    message: msg,
    name: "password",
    type: "password",
    validate(val) {
      if (!val) {
        return "Password cannot be empty...";
      }
      return true;
    },
  };
  const answers = await inquirer.prompt(questions);
  return answers.password;
};

/* istanbul ignore next */
const shouldContinue = (goodToGo) => {
  if (!goodToGo) {
    logger.log("\nBye then!");
    process.exit(0);
  }
  return true;
};

/**
 * Create an hexadecimal hash from a given string. The default
 * algorithm is md5 but it can be changed to anything that
 * crypto.createHash allows.
 * @param  {String} string            the string to hash
 * @param  {String} [algorithm='md5'] the algorithm to use or hashing
 * @return {String}                   the hashed string in hexa format
 */
const createHash = (string, algorithm = HASH_ALGO) =>
  crypto.createHash(algorithm).update(string, UTF8).digest(HEX);

/**
 * Encrypts a string or a buffer using AES-256-CTR algorithm.
 * @param  {String}        password a unique password
 * @param  {String|Buffer} data     a string or a buffer to encrypt
 * @return {String|Buffer} the encrypted data in hexa encoding, followed
 *                         by a dollar sign ($) and by a unique
 *                         random initialization vector used
 */
const encrypt = (password, data) => {
  // Ensure that the initialization vector (IV) is random.
  const iv = crypto.randomBytes(BYTES_FOR_IV);
  // Hash the given password (result should always be the same).
  const key = createHash(password);
  // Create a cipher.
  const cipher = crypto.createCipheriv(CRYPTO_ALGO, key, iv);
  // Encrypt the data using the newly created cipher.
  const crypted = cipher.update(data, UTF8, HEX) + cipher.final(HEX);
  /*
   * Append the IV at the end of the encrypted data to reuse it for
   * decryption (IV is not a key, it can be public).
   */
  return `${crypted}$${iv.toString(HEX)}`;
};

/**
 * Decrypts a string or a buffer that was encrypted using
 * AES-256-CRT algorithm. It expects the encrypted string|buffer to
 * have the corresponding initialization vector appended at the
 * end, after a dollar sign ($) - which is done via the
 * `encrypt` method.
 * @param  {String}        password a unique password
 * @param  {String|Buffer} data     a string or buffer to decrypt
 * @return {String|Buffer}          the decrypted data
 */
const decrypt = (password, data) => {
  // Extract encrypted data and initialization vector (IV).
  const [crypted, ivHex] = data.split("$");
  // Create a buffer out of the raw hex IV
  const iv = Buffer.from(ivHex, HEX);
  // Hash the given password (result should always be the same).
  const hash = createHash(password);
  // Create a cipher.
  const decryptor = crypto.createDecipheriv(CRYPTO_ALGO, hash, iv);
  // Return the decrypted data using the newly created cipher.
  return decryptor.update(crypted, HEX, UTF8) + decryptor.final("utf8");
};

const processFileWithPassword = async (encode, input, output, password) => {
  const fileProcessor = encode ? encrypt : decrypt;
  const data = await readFileAsync(input, FILE_ENCODING);
  /* istanbul ignore else */
  if (output) {
    await writeFileAsync(output, fileProcessor(password, data), FILE_ENCODING);
  } else {
    process.stdout.write(fileProcessor(password, data));
  }
};

module.exports = {
  FILE_ENCODING,
  createHash,
  decrypt,
  displayConfirmation,
  displayPromptWithPassword,
  encrypt,
  processFileWithPassword,
  shouldContinue,
};
