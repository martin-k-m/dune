// Chemistry-related functions
export const molarMass = (elements) => {
    return elements.reduce((sum, element) => sum + element.atomicMass * element.count, 0);
};

export const avogadro = 6.02214076e23; // Avogadro's number