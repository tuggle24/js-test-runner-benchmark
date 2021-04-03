const { syncDeepObject } = require("../exercise");

module.exports.default = (t) => {
  t.test("Passed sync Truthy", (t) => {
    t.ok(true);
  });

  t.test("Failed sync truthy", (t) => {
    t.ok(false);
  });

  t.test("Passed sync equal", (t) => {
    t.is(
      "Javascript Test Runner Benchmark",
      "Javascript Test Runner Benchmark"
    );
  });

  t.test("Failed sync equal", (t) => {
    t.is("Javascript Test Runner Benchmark", "");
  });

  t.test("Passed sync deep object", (t) => {
    const obj1 = syncDeepObject();
    const obj2 = syncDeepObject();
    t.equal(obj1, obj2);
  });

  t.test("Failed sync deep object", (t) => {
    const obj1 = syncDeepObject("Samuel L Jackson");
    const obj2 = syncDeepObject("Tom Hanks");
    t.equal(obj1, obj2);
  });
};
