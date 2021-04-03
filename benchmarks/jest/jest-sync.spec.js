const { syncDeepObject } = require("../exercise");

test("Passed sync Truthy", () => {
  expect(true).toBeTruthy();
});

test("Failed sync truthy", () => {
  expect(false).toBeTruthy();
});

test("Passed sync equal", () => {
  expect("Javascript Test Runner Benchmark").toBe(
    "Javascript Test Runner Benchmark"
  );
});

test("Failed sync equal", () => {
  expect("Javascript Test Runner Benchmark").toBe("");
});

test("Passed sync deep object", () => {
  const obj1 = syncDeepObject();
  const obj2 = syncDeepObject();
  expect(obj1).toEqual(obj2);
});

test("Failed sync deep object", () => {
  const obj1 = syncDeepObject("Samuel L Jackson");
  const obj2 = syncDeepObject("Tom Hanks");
  expect(obj1).toEqual(obj2);
});
