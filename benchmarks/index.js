const execa = require("execa");
const delay = require("delay");
const pMap = require("p-map");
const { createFiles, deleteFiles } = require("./helpers");

process.chdir(__dirname);

const subjects = {
  ava: ["--warmup", 10, "../node_modules/.bin/ava './ava/*.spec.js'"],
  jasmine: ["--warmup", 10, "../node_modules/.bin/jasmine ./jasmine/**"],
  jest: ["--warmup", 10, "../node_modules/.bin/jest ./jest"],
  mocha: ["--warmup", 10, "../node_modules/.bin/mocha ./mocha"],
  pta: [
    "--warmup",
    10,
    "../node_modules/.bin/pta --module-loader cjs ./pta/**",
  ],
  tap: [
    "--warmup",
    10,
    "../node_modules/.bin/tap --no-cov --reporter=classic ./tap",
  ],
  tape: ["--warmup", 10, "../node_modules/.bin/tape ./tape/**"],
  uvu: ["--warmup", 10, "../node_modules/.bin/uvu ./uvu/"],
};

async function benchmarkTestRunners() {
  await pMap(Object.keys(subjects), createFiles);
  await pMap(Object.values(subjects), benchmark, { concurrency: 1 });
  await pMap(Object.keys(subjects), deleteFiles);
}

async function benchmark(command) {
  await delay(7000);
  await execa("hyperfine", command, { stdio: "inherit" });
}

(async function () {
  await benchmarkTestRunners();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
