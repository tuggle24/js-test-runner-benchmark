const cpy = require("cpy");
const del = require("del");
const pTimes = require("p-times");

async function createFiles(subject) {
  await pTimes(2, async (i) => {
    await cpy([`./${subject}/${subject}*.js`], `${subject}`, {
      rename: (basename) => `${i + 1}-${basename}`,
    });
  });
}

async function deleteFiles(subject) {
  await del([`./${subject}/*-${subject}*.js`], { dryRun: false });
}

module.exports = {
  createFiles,
  deleteFiles,
};
