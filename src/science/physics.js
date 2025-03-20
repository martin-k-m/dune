// Physics-related functions
export const kineticEnergy = (mass, velocity) => 0.5 * mass * velocity ** 2;

export const gravitationalForce = (mass1, mass2, distance) => {
    const G = 6.67430e-11; // Gravitational constant
    return (G * mass1 * mass2) / distance ** 2;
};