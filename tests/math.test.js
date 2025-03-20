import { add, factorial, power } from "../src/core/math.js";
import assert from "node:assert/strict";

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(factorial(5), 120);
assert.strictEqual(power(2, 3), 8);