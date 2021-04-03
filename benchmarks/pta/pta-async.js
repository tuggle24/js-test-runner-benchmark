const { asyncDeepObject } = require("../exercise");

module.exports.default = (t) => {
  t.test("Passed sync Truthy", async (t) => {
    t.ok(true);
  });

  t.test("Failed sync truthy", async (t) => {
    t.ok(false);
  });

  t.test("Passed sync equal", async (t) => {
    t.is(
      "Javascript Test Runner Benchmark",
      "Javascript Test Runner Benchmark"
    );
  });

  t.test("Failed sync equal", async (t) => {
    t.is("Javascript Test Runner Benchmark", "");
  });

  t.test("Passed sync deep object", async (t) => {
    const obj1 = await asyncDeepObject();
    const obj2 = await asyncDeepObject();
    t.equal(obj1, obj2);
  });

  t.test("Failed sync deep object", async (t) => {
    const obj1 = await asyncDeepObject("Samuel L Jackson");
    const obj2 = await asyncDeepObject("Tom Hanks");
    t.equal(obj1, obj2);
  });
};
