// Utility functions
export const isNumber = (x) => typeof x === "number" && !isNaN(x);

export const toRadians = (degrees) => (degrees * Math.PI) / 180;

export const toDegrees = (radians) => (radians * 180) / Math.PI;