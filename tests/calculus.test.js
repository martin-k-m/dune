import { derivative, integral, simpsonsIntegral } from "../src/core/calculus.js";
import assert from "node:assert/strict";

// Test derivative
const f = (x) => x ** 2; // f(x) = x^2
const df = (x) => 2 * x; // f'(x) = 2x
assert.ok(Math.abs(derivative(f, 2) - df(2)) < 1e-5); // Approximate derivative at x = 2

// Test integral (trapezoidal rule)
const g = (x) => x ** 3; // g(x) = x^3
const integralG = (a, b) => (b ** 4 / 4) - (a ** 4 / 4); // Integral of g(x) from a to b
assert.ok(Math.abs(integral(g, 0, 2) - integralG(0, 2)) < 1e-5); // Approximate integral from 0 to 2

// Test Simpson's rule
assert.ok(Math.abs(simpsonsIntegral(g, 0, 2) - integralG(0, 2)) < 1e-5); // Approximate integral from 0 to 2