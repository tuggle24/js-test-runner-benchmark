var assert = require("assert");
const { syncDeepObject } = require("../exercise");

it("Passed sync Truthy", () => {
  assert.ok(true);
});

it("Failed sync truthy", () => {
  assert.ok(false);
});

it("Passed sync equal", () => {
  assert.strictEqual(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

it("Failed sync equal", () => {
  assert.strictEqual("Javascript Test Runner Benchmark", "");
});

it("Passed sync deep object", () => {
  const obj1 = syncDeepObject();
  const obj2 = syncDeepObject();
  assert.deepStrictEqual(obj1, obj2);
});

it("Failed sync deep object", () => {
  const obj1 = syncDeepObject("Samuel L Jackson");
  const obj2 = syncDeepObject("Tom Hanks");
  assert.deepStrictEqual(obj1, obj2);
});
