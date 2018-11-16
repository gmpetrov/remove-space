const fs = require('fs');
const path = require('path');
const assert = require('assert');

const removeSpace = require('../removeSpace');

const TEST_DIR = path.resolve(process.cwd(), 'test/tmp');

const FILE_NAME = 'this is a test file';

const cleanDir = dir =>
  fs.readdirSync(dir, (err, files) =>
    files.map(each => fs.unlinkSync(path.resolve(dir, each)))
  );

describe('remove-space', () => {
  describe('one file', () => {
    beforeEach(() => {
      cleanDir(TEST_DIR);

      const fileName = path.resolve(TEST_DIR, FILE_NAME);

      if (!fs.existsSync(TEST_DIR)) {
        fs.mkdirSync(TEST_DIR);
      }

      fs.writeFileSync(fileName);
    });

    it('should change remove space of one filename', async () => {
      const expectedFilename = FILE_NAME.replace(/ /g, '-');

      await removeSpace(TEST_DIR);

      fs.readdirSync(TEST_DIR, (err, files) => {
        for (let name of files) {
          assert.equal(name, expectedFilename);
        }
      });
    });
  });
});
