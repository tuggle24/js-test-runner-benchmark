const test = require("ava");
const { asyncDeepObject } = require("../exercise");

test("Passed async Truthy", async (t) => {
  t.truthy(true);
});

test("Failed async truthy", async (t) => {
  t.truthy(false);
});

test("Passed async equal", async (t) => {
  t.is("Javascript Test Runner Benchmark", "Javascript Test Runner Benchmark");
});

test("Failed async equal", async (t) => {
  t.is("Javascript Test Runner Benchmark", "");
});

test("Passed async deep object", async (t) => {
  const obj1 = await asyncDeepObject();
  const obj2 = await asyncDeepObject();
  t.deepEqual(obj1, obj2);
});

test("Failed async deep object", async (t) => {
  const obj1 = await asyncDeepObject("Samuel L Jackson");
  const obj2 = await asyncDeepObject("Tom Hanks");
  t.deepEqual(obj1, obj2);
});
