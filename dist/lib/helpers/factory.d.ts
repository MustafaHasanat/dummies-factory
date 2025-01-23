export declare function getRandomItems(array: any[], length: number): string | string[];
export declare function generateRandomArray({ length, type, min, max, decimalPlaces, }: {
    length: number;
    min: number;
    max: number;
    type: "integer" | "decimal";
    decimalPlaces: number;
}): number | number[];
export declare const generateRandomUUIDs: (length: number) => string | string[];
