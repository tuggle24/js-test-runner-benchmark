const { syncDeepObject } = require("../exercise");

it("Passed sync Truthy", () => {
  expect(true).toBeTruthy();
});

it("Failed sync truthy", () => {
  expect(false).toBeTruthy();
});

it("Passed sync equal", () => {
  expect("Javascript Test Runner Benchmark").toBe(
    "Javascript Test Runner Benchmark"
  );
});

it("Failed sync equal", () => {
  expect("Javascript Test Runner Benchmark").toBe("");
});

it("Passed sync deep object", () => {
  const obj1 = syncDeepObject();
  const obj2 = syncDeepObject();
  expect(obj1).toEqual(obj2);
});

it("Failed sync deep object", () => {
  const obj1 = syncDeepObject("Samuel L Jackson");
  const obj2 = syncDeepObject("Tom Hanks");
  expect(obj1).toEqual(obj2);
});
