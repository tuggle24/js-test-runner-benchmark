var assert = require("assert");
const { asyncDeepObject } = require("../exercise");

it("Passed async Truthy", async () => {
  assert.ok(true);
});

it("Failed async truthy", async () => {
  assert.ok(false);
});

it("Passed async equal", async () => {
  assert.strictEqual(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

it("Failed async equal", async () => {
  assert.strictEqual("Javascript Test Runner Benchmark", "");
});

it("Passed async deep object", async () => {
  const obj1 = await asyncDeepObject();
  const obj2 = await asyncDeepObject();
  assert.deepStrictEqual(obj1, obj2);
});

it("Failed async deep object", async () => {
  const obj1 = await asyncDeepObject("Samuel L Jackson");
  const obj2 = await asyncDeepObject("Tom Hanks");
  assert.deepStrictEqual(obj1, obj2);
});
