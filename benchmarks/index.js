const execa = require("execa");
const delay = require("delay");
const { createFiles, deleteFiles } = require("./helpers");

async function benchmark() {
  process.chdir(__dirname);

  const options = {
    stdio: "inherit",
  };

  await createFiles("ava");
  await execa(
    "hyperfine",
    ["../node_modules/.bin/ava './ava/*.spec.js'"],
    options
  );
  await deleteFiles("ava");

  await createFiles("jasmine");
  await execa(
    "hyperfine",
    ["../node_modules/.bin/jasmine ./jasmine/**"],
    options
  );
  await deleteFiles("jasmine");

  await createFiles("jest");
  await execa("hyperfine", ["../node_modules/.bin/jest ./jest"], options);
  await deleteFiles("jest");

  await createFiles("mocha");
  await execa("hyperfine", ["../node_modules/.bin/mocha ./mocha"], options);
  await deleteFiles("mocha");

  await createFiles("pta");
  await execa(
    "hyperfine",
    ["../node_modules/.bin/pta --module-loader cjs ./pta/**"],
    options
  );
  await deleteFiles("pta");

  await createFiles("tap");
  await execa(
    "hyperfine",
    ["../node_modules/.bin/tap --no-cov --reporter=classic ./tap"],
    options
  );
  await deleteFiles("tap");

  await createFiles("tape");
  await execa("hyperfine", ["../node_modules/.bin/tape ./tape/**"], options);
  await deleteFiles("tape");

  await createFiles("uvu");
  await execa("hyperfine", ["../node_modules/.bin/uvu ./uvu/"], options);
  await deleteFiles("uvu");
}

(async function () {
  await benchmark();
})().catch((err) => {
  console.error("Something went wrong!");
  console.error(err);
  process.exit(1);
});
