const tap = require("tap");
const { syncDeepObject } = require("../exercise");

tap.test("Passed sync Truthy", (t) => {
  t.ok(true);
});

tap.test("Failed sync Truthy", (t) => {
  t.ok(false);
});

tap("Passed sync equal", (t) => {
  t.equal(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

tap("Failed sync equal", (t) => {
  t.equal("Javascript Test Runner Benchmark", "");
});

tap("Passed sync deep object", (t) => {
  const obj1 = syncDeepObject();
  const obj2 = syncDeepObject();
  t.same(obj1, obj2);
});

tap("Failed sync deep object", (t) => {
  const obj1 = syncDeepObject("Samuel L Jackson");
  const obj2 = syncDeepObject("Tom Hanks");
  t.same(obj1, obj2);
});
