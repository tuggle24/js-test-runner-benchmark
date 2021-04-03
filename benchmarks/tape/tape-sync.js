const test = require("tape");
const { syncDeepObject } = require("../exercise");

test("Passed sync Truthy", (t) => {
  t.plan(1);
  t.ok(true);
});

test("Failed sync truthy", (t) => {
  t.plan(1);
  t.ok(false);
});

test("Passed sync equal", (t) => {
  t.plan(1);
  t.equal(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

test("Failed sync equal", (t) => {
  t.plan(1);
  t.equal("Javascript Test Runner Benchmark", "");
});

test("Passed sync deep object", (t) => {
  t.plan(1);
  const obj1 = syncDeepObject();
  const obj2 = syncDeepObject();
  t.deepEqual(obj1, obj2);
});

test("Failed sync deep object", (t) => {
  t.plan(1);
  const obj1 = syncDeepObject("Fastest is not the best");
  const obj2 = syncDeepObject("The best one is the one you like");
  t.deepEqual(obj1, obj2);
});
