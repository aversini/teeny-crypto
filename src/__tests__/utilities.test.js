const path = require("path");
const fs = require("fs-extra");
const os = require("os");
const fsify = require("fsify")({
  cwd: os.tmpdir(),
  force: false,
  persistent: false,
});
const {
  createHash,
  encrypt,
  decrypt,
  processFileWithPassword,
} = require("../utilities");

const password = "this is a skrt";
const contentToEncrypt = "Hello World";
const contentToEncryptUTF8 = "⭐️ Hello World ⭐️";

describe("when testing with NO logging side-effects", () => {
  it("should return the same hash given the same input string and algorithm", async () => {
    const hmd5 = createHash(password);
    expect(hmd5).toBe("0f2258436205eec8e11e1bb8d9a967c4");

    const hsha256 = createHash(password, "sha256");
    expect(hsha256).toBe(
      "c19952f971ab236afcb825e387e64c2194cf8cfbb814f0ac0cd85702a9d15696"
    );
  });

  it("should encrypt and decrypt a simple string", async () => {
    const encrypted = encrypt(password, contentToEncrypt);
    const decrypted = decrypt(password, encrypted);
    expect(decrypted).toBe(contentToEncrypt);
  });

  it("should encrypt and decrypt a UTF8 string", async () => {
    const encrypted = encrypt(password, contentToEncryptUTF8);
    const decrypted = decrypt(password, encrypted);
    expect(decrypted).toBe(contentToEncryptUTF8);
  });
});

describe("when testing with filesystem dependency", () => {
  it("should read and create files accordingly", async () => {
    const structure = [
      {
        contents: [
          {
            contents: contentToEncryptUTF8,
            name: "input.txt",
            type: fsify.FILE,
          },
        ],
        name: "dirname",
        type: fsify.DIRECTORY,
      },
    ];
    await fsify(structure);

    const inputFile = path.join(os.tmpdir(), "dirname", "input.txt");
    const outputFile = path.join(os.tmpdir(), "dirname", "output.encoded");

    await processFileWithPassword(true, inputFile, outputFile, password);
    expect(fs.existsSync(outputFile)).toBe(true);
    await processFileWithPassword(false, outputFile, inputFile, password);
    expect(fs.existsSync(inputFile)).toBe(true);
    expect(fs.existsSync(outputFile)).toBe(true);
    expect(fs.readFileSync(inputFile, "utf8")).toBe(contentToEncryptUTF8);
  });
});
