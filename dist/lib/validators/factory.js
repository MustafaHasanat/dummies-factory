export function validateArrayLength(arrayLength) {
    if (Number(arrayLength) < 1) {
        throw new Error(`Array length cannot be less than 1, got "${arrayLength}"`);
    }
}
export function validateShape({ type, decimalPlaces, max, min, numericType, theme, }) {
    if (type === "string") {
        if (decimalPlaces || max || min || numericType)
            throw new Error(`The following props are not allowed while using the string type: 'decimalPlaces', 'max', 'min', 'numericType'`);
    }
    else if (type === "number") {
        if (theme)
            throw new Error(`The following props are not allowed while using the string type: 'theme'`);
    }
}
export function validateBackendUrl(backendUrl) {
    if (!backendUrl) {
        throw new Error(`Backend Url must be a valid url, got "${backendUrl}"`);
    }
}
export function validateFactoryConstructor({ arrayLength, shape, backendUrl, }) {
    validateArrayLength(arrayLength);
    validateBackendUrl(backendUrl);
    validateShape(shape);
}
//# sourceMappingURL=factory.js.map