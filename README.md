# Dune Framework

A lightweight JavaScript framework for science and mathematics, providing essential tools for calculus, statistics, and more.

---

## Installation

To install the `dune` package, run the following command:

	npm install dune

## Usage

Here’s how to use the `dune` framework in your project:

  ### Example Calculus Function

  	import { derivative, integral } from "dune";
  	
  	// Define a function
  	const f = (x) => x ** 2;
  	
  	// Compute the derivative at x = 2
  	console.log(derivative(f, 2)); // Output: 4
  	
  	// Compute the integral from 0 to 2
  	console.log(integral(f, 0, 2)); // Output: 2.666666666666667

   ### Example: Statistics Functions

  	import { mean, median } from "dune";
  	
  	const data = [1, 2, 3, 4, 5];

  	// Compute the mean
  	console.log(mean(data)); // Output: 3

  	// Compute the median
  	console.log(median(data)); // Output: 3

## API Documentation

  ### Core Math

  `add(a, b)`: Adds two numbers.

  `subtract(a, b)`: Subtracts two numbers.

  `multiply(a, b)`: Multiplies two numbers.

  `divide(a, b)`: Divides two numbers.

  `factorial(n)`: Computes the factorial of a number.

  `power(base, exponent)`: Computes the power of a number.

  `sqrt(x)`: Computes the square root of a number.

  ### Calculus

  `derivative(f, x, h)`: Computes the derivative of a function at a point.

  `f`: The function to differentiate.

  `x`: The point at which to compute the derivative.

  `h`: The step size (default: 1e-5).

  `integral(f, a, b, n)`: Computes the definite integral of a function over an interval using the trapezoidal rule.

  `f`: The function to integrate.

  `a`: The lower bound of the interval.

  `b`: The upper bound of the interval.

  `n`: The number of trapezoids to use (default: 1000).

  `simpsonsIntegral(f, a, b, n)`: Computes the definite integral using Simpson's rule.

  `f`: The function to integrate.

  `a`: The lower bound of the interval.

  `b`: The upper bound of the interval.

  `n`: The number of intervals to use (must be even, default: 1000).

  ### Statistics

  `mean(arr)`: Computes the mean of an array of numbers.

  `median(arr)`: Computes the median of an array of numbers.

  `mode(arr)`: Computes the mode of an array of numbers.

  ### Utilities

  `isNumber(x)`: Checks if a value is a number.

  `toRadians(degrees)`: Converts degrees to radians.

  `toDegrees(radians)`: Converts radians to degrees.

## Examples

  ### Derivative of a Function

  	import { derivative } from "dune";
  	
  	const f = (x) => Math.sin(x);
  	console.log(derivative(f, Math.PI / 2)); // Output: ~0 (derivative of sin(x) at x = π/2 is cos(π/2) = 0)

   ### Integral of a Function
   
  	import { integral } from "dune";
  	
  	const f = (x) => Math.sin(x);
  	console.log(integral(f, 0, Math.PI)); // Output: ~2 (integral of sin(x) from 0 to π is 2)

   ### Statistical Analysis

  	import { mean, median, mode } from "dune";
  	
  	const data = [1, 2, 2, 3, 4];
  	console.log(mean(data)); // Output: 2.4
  	console.log(median(data)); // Output: 2
  	console.log(mode(data)); // Output: 2
