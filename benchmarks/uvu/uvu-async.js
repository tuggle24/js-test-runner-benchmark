const { test } = require("uvu");
const assert = require("uvu/assert");
const { asyncDeepObject } = require("../exercise");

test("Passed async Truthy", async () => {
  assert.ok(true);
});

test("Failed async truthy", async () => {
  assert.ok(false);
});

test("Passed async equal", async () => {
  assert.is(
    "Javascript Test Runner Benchmark",
    "Javascript Test Runner Benchmark"
  );
});

test("Failed async truthy", async () => {
  assert.is("Javascript Test Runner Benchmark", "");
});

test("Passed async deep object", async () => {
  const obj1 = await asyncDeepObject();
  const obj2 = await asyncDeepObject();
  assert.equal(obj1, obj2);
});

test("Failed async deep object", async () => {
  const obj1 = await asyncDeepObject("Samuel L Jackson");
  const obj2 = await asyncDeepObject("Tom Hanks");
  assert.equal(obj1, obj2);
});

test.run();
