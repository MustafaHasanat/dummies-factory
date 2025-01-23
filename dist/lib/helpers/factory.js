export function getRandomItems(array, length) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return length === 1 ? shuffled[0] : shuffled.slice(0, length);
}
export function generateRandomArray({ length, type = "integer", min = 0, max = 100, decimalPlaces = 2, }) {
    const result = [];
    for (let i = 0; i < length; i++) {
        let randomValue = Math.random() * (max - min) + min; // Generate a random number within the range
        if (type === "decimal") {
            randomValue = parseFloat(randomValue.toFixed(decimalPlaces)); // Limit to the specified decimal places
        }
        else {
            randomValue = Math.floor(randomValue); // Convert to an integer
        }
        result.push(randomValue);
    }
    return length === 1 ? result[0] : result;
}
export const generateRandomUUIDs = (length) => {
    const generateUUID = () => {
        // Generate a UUID following the standard format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
            const random = (Math.random() * 16) | 0; // Generate a random integer between 0 and 15
            const value = char === "x" ? random : (random & 0x3) | 0x8; // Adjust 'y' to include only values 8, 9, A, or B
            return value.toString(16); // Convert to hexadecimal
        });
    };
    const uuidArray = [];
    for (let i = 0; i < length; i++) {
        uuidArray.push(generateUUID());
    }
    return length === 1 ? uuidArray[0] : uuidArray;
};
//# sourceMappingURL=factory.js.map