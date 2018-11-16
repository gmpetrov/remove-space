const fs = require('fs');
const path = require('path');

const removeSpace = dir =>
  new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        console.error(err);
        return reject(err);
      }

      (files || []).map(filename => {
        if (filename.includes(' ')) {
          const newFileName = filename.replace(/ /g, '-');
          const oldfileNamePath = path.resolve(dir, filename);
          const newFileNamePath = path.resolve(dir, newFileName);

          fs.rename(oldfileNamePath, newFileNamePath, err => {
            if (err) {
              console.error(error);
            }
          });
        }
      });

      resolve();
    });
  });

module.exports = removeSpace;
