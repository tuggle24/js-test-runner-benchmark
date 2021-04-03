const { test } = require("uvu");
const assert = require("uvu/assert");
const { syncDeepObject } = require("../exercise");

test("Passed sync Truthy", () => {
  assert.ok(true);
});

test("Failed sync truthy", () => {
  assert.ok(false);
});

test("Passed sync equal", () => {
  assert.is(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

test("Failed sync equal", () => {
  assert.is("Javascript Test Runner Benchmark", "");
});

test("Passed sync deep object", () => {
  const obj1 = syncDeepObject();
  const obj2 = syncDeepObject();
  assert.equal(obj1, obj2);
});

test("Failed sync deep object", () => {
  const obj1 = syncDeepObject("Samuel L Jackson");
  const obj2 = syncDeepObject("Tom Hanks");
  assert.equal(obj1, obj2);
});

test.run();
