const execa = require("execa");
const delay = require("delay");
const pMap = require("p-map");
const { createFiles, deleteFiles } = require("./helpers");

process.chdir(__dirname);

const common = ["-i", "--warmup", 10];

const subjects = {
  ava: common.concat(
    "../node_modules/.bin/ava --fail-fast false './ava/*.spec.js'"
  ),
  jasmine: common.concat("../node_modules/.bin/jasmine ./jasmine/**"),
  jest: common.concat("../node_modules/.bin/jest ./jest"),
  mocha: common.concat("../node_modules/.bin/mocha ./mocha"),
  pta: common.concat("../node_modules/.bin/pta --module-loader cjs ./pta/**"),
  tap: common.concat(
    "../node_modules/.bin/tap --no-cov --reporter=classic ./tap"
  ),
  tape: common.concat("../node_modules/.bin/tape ./tape/**"),
  uvu: common.concat("../node_modules/.bin/uvu ./uvu/"),
};

async function benchmarkTestRunners() {
  await pMap(Object.keys(subjects), createFiles);
  await pMap(Object.values(subjects), benchmark, { concurrency: 1 });
  await pMap(Object.keys(subjects), deleteFiles);
}

async function benchmark(command) {
  await delay(3000);
  await execa("hyperfine", command, { stdio: "inherit" });
}

(async function () {
  await benchmarkTestRunners();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
