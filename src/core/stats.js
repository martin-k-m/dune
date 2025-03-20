// Statistical functions
export const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

export const median = (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

export const mode = (arr) => {
    const frequency = {};
    arr.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
    return Object.keys(frequency).reduce((a, b) => (frequency[a] > frequency[b] ? a : b));
};