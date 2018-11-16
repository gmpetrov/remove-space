#!/usr/bin/env node
const removeSpace = require('./removeSpace');

const run = () => {
  if (process.argv.length < 3) {
    console.warn('[usage]: remove-space [directory_path]');
    return;
  }

  const dir = process.argv[2];

  removeSpace(dir);
};

run();
