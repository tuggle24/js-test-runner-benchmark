const execa = require("execa");
const delay = require("delay");
const { createFiles, deleteFiles } = require("./helpers");
const pMap = require("p-map");
const pProps = require("p-props");

const subjects = {
  ava: "../node_modules/.bin/ava './ava/*.spec.js'",
  jasmine: "../node_modules/.bin/jasmine ./jasmine/**",
  jest: "../node_modules/.bin/jest ./jest",
  mocha: "../node_modules/.bin/mocha ./mocha",
  pta: "../node_modules/.bin/pta --module-loader cjs ./pta/**",
  tap: "../node_modules/.bin/tap --no-cov --reporter=classic ./tap",
  tape: "../node_modules/.bin/tape ./tape/**",
  uvu: "../node_modules/.bin/uvu ./uvu/",
};

async function benchmarkTestRunners() {
  process.chdir(__dirname);
  await pMap(Object.keys(subjects), createFiles);
  await pProps(subjects, benchmark, { concurrency: 1 });
  await pMap(Object.keys(subjects), deleteFiles);
}

async function benchmark(command) {
  await execa("hyperfine", [command], { stdio: "inherit" });
}

(async function () {
  await benchmarkTestRunners();
})().catch((err) => {
  console.error("Something went wrong!");
  console.error(err);
  process.exit(1);
});
