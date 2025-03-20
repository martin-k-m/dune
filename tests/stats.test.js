import { mean, median, mode } from "../src/core/stats.js";
import assert from "node:assert/strict";

assert.strictEqual(mean([1, 2, 3, 4, 5]), 3);
assert.strictEqual(median([1, 2, 3, 4, 5]), 3);
assert.strictEqual(mode([1, 2, 2, 3, 4]), 2);