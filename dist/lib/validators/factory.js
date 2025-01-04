export function validateArrayLength(arrayLength) {
    if (Number(arrayLength) < 1) {
        throw new Error(`Array length cannot be less than 1, got "${arrayLength}"`);
    }
}
export function validateShape(shape) { }
export function validateFactoryConstructor({ arrayLength, shape, }) {
    validateArrayLength(arrayLength);
    validateShape(shape);
}
//# sourceMappingURL=factory.js.map