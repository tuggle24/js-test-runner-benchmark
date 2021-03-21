const cpy = require("cpy");
const del = require("del");
const pTimes = require("p-times");
const exitHook = require("exit-hook");

async function createFiles(subject) {
  await pTimes(1, async (i) => {
    await cpy([`./${subject}/${subject}*.js`], `${subject}`, {
      rename: (basename) => `${i + 1}-${basename}`,
    });
  });
  return subject;
}

async function deleteFiles(subject) {
  await del([`./${subject}/[0-9]+-${subject}*.js`], { dryRun: false });
}

exitHook(() => {
  del.sync(["./**/[0-9]+-*.js"], { dryRun: false });
});

module.exports = {
  createFiles,
  deleteFiles,
};
