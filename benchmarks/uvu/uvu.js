const { test } = require('uvu');
const assert = require('uvu/assert');

test('mod', () => {
    assert.is(1, 1)
});

test.run();