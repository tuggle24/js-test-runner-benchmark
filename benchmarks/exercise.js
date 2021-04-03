async function asyncDeepObject(name = "Meryl Streep") {
  return [
    {
      this: {
        is: {
          a: {
            7: { levels: { deep: { comparison: [name] } } },
          },
        },
      },
    },
  ];
}

async function asyncPrimitive(name = "Viola Davis") {
  return name;
}

function syncDeepObject(name = "Meryl Streep") {
  return [
    {
      this: {
        is: {
          a: {
            7: { levels: { deep: { comparison: [name] } } },
          },
        },
      },
    },
  ];
}

function syncPrimitive(name = "Viola Davis") {
  return name;
}

module.exports = {
  asyncDeepObject,
  asyncPrimitive,
  syncPrimitive,
  syncDeepObject,
};
