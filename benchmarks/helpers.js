const cpy = require("cpy");
const del = require("del");
const pTimes = require("p-times");
const exitHook = require("exit-hook");
const argv = require("minimist");

async function createFiles(subject) {
  const { copies = 10 } = argv(process.argv.slice(2));

  await pTimes(copies, async (i) => {
    await cpy([`./${subject}/${subject}*.js`], `${subject}`, {
      rename: (basename) => `${i + 1}-${basename}`,
    });
  });
}

async function deleteFiles(subject) {
  await del([`./${subject}/[0-9]+-${subject}*.js`], { dryRun: false });
}

exitHook(() => del.sync(["./**/[0-9]+-*.js"], { dryRun: false }));

module.exports = {
  createFiles,
  deleteFiles,
};
