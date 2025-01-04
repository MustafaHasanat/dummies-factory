import {
    DummiesFactoryNumericType,
    DummiesFactoryProps,
    DummiesFactoryShape,
    DummiesFactoryStringTheme,
} from "../types";
import {
    americanNamesCollection,
    arabicNamesCollection,
    countriesCollection,
    DEFAULT_FACTORY_ARRAY_LENGTH,
    foodsCollection,
    generateRandomUUIDs,
    placesCollection,
    sportsCollection,
    videoGamesCollection,
} from "../constants";
import {
    validateArrayLength,
    validateFactoryConstructor,
    validateShape,
} from "../validators";
import { generateRandomArray, getRandomItems } from "../helpers";

/**
 *
 */
export class DummiesFactory {
    private arrayLength: number;
    private shape: DummiesFactoryShape;
    private array;

    /**
     *
     * @param param0
     */
    constructor({
        shape,
        arrayLength = DEFAULT_FACTORY_ARRAY_LENGTH,
    }: DummiesFactoryProps) {
        validateFactoryConstructor({
            arrayLength,
            shape,
        });

        this.shape = shape;
        this.arrayLength = arrayLength;

        this.array = this.getArrayFromShape({ shape, arrayLength });
    }

    /**
     * Returns the current arrayLength
     *
     * @returns arrayLength
     */
    getArrayLength(): DummiesFactoryProps["arrayLength"] {
        return this.arrayLength;
    }

    /**
     * Adjust the current arrayLength
     *
     * @param arrayLength
     */
    setArrayLength(arrayLength: DummiesFactoryProps["arrayLength"]): void {
        validateArrayLength(arrayLength);
        this.arrayLength = arrayLength || DEFAULT_FACTORY_ARRAY_LENGTH;
    }

    /**
     * Returns the current shape
     *
     * @returns shape
     */
    getShape(): DummiesFactoryProps["shape"] {
        return this.shape;
    }

    /**
     * Adjust the current shape
     *
     * @param shape
     */
    setShape(shape: DummiesFactoryProps["shape"]): void {
        validateShape(shape);
        this.shape = shape;
        this.array = this.getArrayFromShape({ shape });
    }

    private getArrayFromShape({
        shape,
        arrayLength = DEFAULT_FACTORY_ARRAY_LENGTH,
    }: DummiesFactoryProps) {
        if (shape.type === "string")
            return this.getRandomStringArray({
                length: arrayLength,
                theme: shape.theme || "sport",
            });
        else if (shape.type === "number")
            return this.getRandomNumericArray({
                length: arrayLength,
                numericType: shape.numericType || "integer",
                decimalPlaces: shape.decimalPlaces || 2,
                max: shape.max || 100,
                min: shape.min || 0,
            });
        else if (shape.type === "array")
            return this.getRandomArraysArray({
                length: arrayLength,
                arrayOf: shape.arrayOf,
            });
        else if (shape.type === "object")
            return this.getRandomObjectArray({
                length: arrayLength,
                properties: shape.properties,
            });
        return [] as string[];
    }

    /**
     * Generate an array of string following the provided theme and length
     *
     * @param length array length
     * @param theme strings' theme
     *
     * @returns array of thematic string
     */
    private getRandomStringArray({
        length,
        theme,
    }: {
        length: number;
        theme: DummiesFactoryStringTheme;
    }): string | string[] {
        if (theme === "sport") return getRandomItems(sportsCollection, length);
        else if (theme === "food")
            return getRandomItems(foodsCollection, length);
        else if (theme === "videoGames")
            return getRandomItems(videoGamesCollection, length);
        else if (theme === "uuid") return generateRandomUUIDs(length);
        else if (theme === "american-names")
            return getRandomItems(americanNamesCollection, length);
        else if (theme === "arabic-names")
            return getRandomItems(arabicNamesCollection, length);
        else if (theme === "country")
            return getRandomItems(countriesCollection, length);
        else if (theme === "place")
            return getRandomItems(placesCollection, length);
        else return [];
    }

    /**
     * Generate an array of numbers according to the given customizations
     *
     * @param length array length
     * @param numericType integers or decimals
     * @param decimalPlaces number of decimal places when numericType="decimal"
     * @param min min possible number in the array
     * @param max max possible number in the array
     *
     * @returns array of thematic string
     */
    private getRandomNumericArray({
        length,
        numericType,
        decimalPlaces,
        max,
        min,
    }: {
        length: number;
        numericType: DummiesFactoryNumericType;
        decimalPlaces: number;
        max: number;
        min: number;
    }): number | number[] {
        return generateRandomArray({
            length,
            type: numericType,
            decimalPlaces,
            max,
            min,
        });
    }

    private getRandomArraysArray({
        length,
        arrayOf,
    }: {
        length: number;
        arrayOf?: DummiesFactoryShape;
    }) {
        return [];
    }

    private getRandomObjectArray({
        length,
        properties,
    }: {
        length: number;
        properties?: DummiesFactoryShape["properties"];
    }) {
        if (!properties) return [];

        const array: any = [];

        new Array(length).fill(0).forEach(() => {
            const object: { [key: string]: any } = {};

            Object.entries(properties).forEach(([property, shape]) => {
                object[property] = this.getArrayFromShape({
                    shape,
                    arrayLength: 1,
                });
            });

            array.push(object);
        });

        return length === 1 ? array[0] : array;
    }

    /**
     * Returns the current finalized array
     *
     * @returns array
     */
    getArray() {
        const currentArray = this.array;

        return currentArray.length === 0
            ? []
            : (currentArray as unknown as (typeof currentArray)[0]);
    }
}
