#!/usr/bin/env node

const { resolve } = require('path');
const { spawnSync } = require('child_process');
const glob = require('glob');

// colors for console output
const red = '\x1b[31m';
const green = '\x1b[32m';
const colorReset = '\x1b[0m';

(async () => {
  let exitState = 0;

  glob.sync(resolve(__dirname, `./config/*.yaml`)).forEach(file => {
    let color = '';

    console.log(`\n\n 🐼 -> Validating OpenAPI spec ${file}`);

    const { output, status } = spawnSync(
      resolve(__dirname, '../../node_modules/.bin/swagger-cli'),
      ['validate', file]
    );

    if (status !== 0) {
      color = red;
      exitState = status;
      console.log(` ❌ -> OpenAPI validation error! Code: ${status}\n`);
    } else {
      color = green;
      console.log(` ✅ -> validation OK\n`);
    }
    console.log(
      color,
      output
        .map(resultBuff => (resultBuff ? resultBuff.toString().trim() : null))
        .join(''),
      colorReset
    );
  });

  process.exit(exitState);
})();
