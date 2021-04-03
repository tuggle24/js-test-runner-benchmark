const test = require("ava");
const { syncDeepObject } = require("../exercise");

test("Passed sync Truthy", (t) => {
  t.truthy(true);
});

test("Failed sync truthy", (t) => {
  t.truthy(false);
});

test("Passed sync equal", (t) => {
  t.is("Javascript Test Runner Benchmark", "Javascript Test Runner Benchmark");
});

test("Failed sync equal", (t) => {
  t.is("Javascript Test Runner Benchmark", "");
});

test("Passed sync deep object", (t) => {
  const obj1 = syncDeepObject();
  const obj2 = syncDeepObject();
  t.deepEqual(obj1, obj2);
});

test("Failed sync deep object", (t) => {
  const obj1 = syncDeepObject("Samuel L Jackson");
  const obj2 = syncDeepObject("Tom Hanks");
  t.deepEqual(obj1, obj2);
});
