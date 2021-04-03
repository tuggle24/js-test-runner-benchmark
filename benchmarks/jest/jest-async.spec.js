const { asyncDeepObject } = require("../exercise");

test("Passed async Truthy", async () => {
  expect(true).toBeTruthy();
});

test("Failed async truthy", async () => {
  expect(false).toBeTruthy();
});

test("Passed async equal", async () => {
  expect("Javascript Test Runner Benchmark").toBe(
    "Javascript Test Runner Benchmark"
  );
});

test("Failed async equal", async () => {
  expect("Javascript Test Runner Benchmark").toBe("");
});

test("Passed async deep object", async () => {
  const obj1 = await asyncDeepObject();
  const obj2 = await asyncDeepObject();
  expect(obj1).toEqual(obj2);
});

test("Failed async deep object", async () => {
  const obj1 = await asyncDeepObject("Samuel L Jackson");
  const obj2 = await asyncDeepObject("Tom Hanks");
  expect(obj1).toEqual(obj2);
});
