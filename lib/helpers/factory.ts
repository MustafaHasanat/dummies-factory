export function getRandomItems(
    array: any[],
    length: number
): string | string[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return length === 1 ? shuffled[0] : shuffled.slice(0, length);
}

export function generateRandomArray({
    length,
    type = "integer",
    min = 0,
    max = 100,
    decimalPlaces = 2,
}: {
    length: number;
    min: number;
    max: number;
    type: "integer" | "decimal";
    decimalPlaces: number;
}) {
    const result = [];

    for (let i = 0; i < length; i++) {
        let randomValue = Math.random() * (max - min) + min; // Generate a random number within the range

        if (type === "decimal") {
            randomValue = parseFloat(randomValue.toFixed(decimalPlaces)); // Limit to the specified decimal places
        } else {
            randomValue = Math.floor(randomValue); // Convert to an integer
        }

        result.push(randomValue);
    }

    return length === 1 ? result[0] : result;
}
