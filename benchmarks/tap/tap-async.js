const tap = require("tap");
const { asyncDeepObject } = require("../exercise");

tap.test("Passed async Truthy", async (t) => {
  t.ok(true);
});

tap.test("Failed async Truthy", async (t) => {
  t.ok(false);
});

tap("Passed async equal", async (t) => {
  t.equal(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

tap("Failed async equal", async (t) => {
  t.equal("Javascript Test Runner Benchmark", "");
});

tap("Passed async deep object", async (t) => {
  const obj1 = await asyncDeepObject();
  const obj2 = await asyncDeepObject();
  t.same(obj1, obj2);
});

tap("Failed async deep object", async (t) => {
  const obj1 = await asyncDeepObject("Samuel L Jackson");
  const obj2 = await asyncDeepObject("Tom Hanks");
  t.same(obj1, obj2);
});
