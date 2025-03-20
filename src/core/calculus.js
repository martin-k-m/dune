// Calculus functions

/**
 * Computes the derivative of a function at a given point using the limit definition.
 * @param {function} f - The function to differentiate.
 * @param {number} x - The point at which to compute the derivative.
 * @param {number} h - The step size (default is a small value like 1e-5).
 * @returns {number} - The derivative of the function at point x.
 */
export const derivative = (f, x, h = 1e-5) => {
    return (f(x + h) - f(x - h)) / (2 * h);
};

/**
 * Computes the definite integral of a function over an interval using the trapezoidal rule.
 * @param {function} f - The function to integrate.
 * @param {number} a - The lower bound of the interval.
 * @param {number} b - The upper bound of the interval.
 * @param {number} n - The number of trapezoids to use (default is 1000).
 * @returns {number} - The approximate integral of the function over [a, b].
 */
export const integral = (f, a, b, n = 1000) => {
    const dx = (b - a) / n;
    let sum = 0.5 * (f(a) + f(b)); // Start with the endpoints

    for (let i = 1; i < n; i++) {
        sum += f(a + i * dx);
    }

    return sum * dx;
};

/**
 * Computes the definite integral of a function over an interval using Simpson's rule.
 * @param {function} f - The function to integrate.
 * @param {number} a - The lower bound of the interval.
 * @param {number} b - The upper bound of the interval.
 * @param {number} n - The number of intervals to use (must be even, default is 1000).
 * @returns {number} - The approximate integral of the function over [a, b].
 */
export const simpsonsIntegral = (f, a, b, n = 1000) => {
    if (n % 2 !== 0) throw new Error("n must be even for Simpson's rule");
    const dx = (b - a) / n;
    let sum = f(a) + f(b); // Start with the endpoints

    for (let i = 1; i < n; i++) {
        const x = a + i * dx;
        sum += i % 2 === 0 ? 2 * f(x) : 4 * f(x); // Alternate weights
    }

    return (sum * dx) / 3;
};