const test = require("tape");
const { asyncDeepObject } = require("../exercise");

test("Passed async Truthy", async (t) => {
  t.plan(1);
  t.ok(true);
});

test("Failed async truthy", async (t) => {
  t.plan(1);
  t.ok(false);
});

test("Passed async equal", async (t) => {
  t.plan(1);
  t.equal(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

test("Failed async equal", async (t) => {
  t.plan(1);
  t.equal("Javascript Test Runner Benchmark", "");
});

test("Passed async deep object", async (t) => {
  t.plan(1);
  const obj1 = await asyncDeepObject();
  const obj2 = await asyncDeepObject();
  t.deepEqual(obj1, obj2);
});

test("Failed async deep object", async (t) => {
  t.plan(1);
  const obj1 = await asyncDeepObject("Fastest is not the best");
  const obj2 = await asyncDeepObject("The best one is the one you like");
  t.deepEqual(obj1, obj2);
});
