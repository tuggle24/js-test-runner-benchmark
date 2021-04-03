const { asyncDeepObject } = require("../exercise");

it("Passed async Truthy", async () => {
  expect(true).toBeTruthy();
});

it("Failed async truthy", async () => {
  expect(false).toBeTruthy();
});

it("Passed async equal", async () => {
  expect("Javascript Test Runner Benchmark").toBe(
    "Javascript Test Runner Benchmark"
  );
});

it("Failed async equal", async () => {
  expect("Javascript Test Runner Benchmark").toBe("");
});

it("Passed async deep object", async () => {
  const obj1 = await asyncDeepObject();
  const obj2 = await asyncDeepObject();
  expect(obj1).toEqual(obj2);
});

it("Failed async deep object", async () => {
  const obj1 = await asyncDeepObject("Samuel L Jackson");
  const obj2 = await asyncDeepObject("Tom Hanks");
  expect(obj1).toEqual(obj2);
});
