// Basic math functions
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

// Advanced math functions
export const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

export const power = (base, exponent) => Math.pow(base, exponent);

export const sqrt = (x) => Math.sqrt(x);