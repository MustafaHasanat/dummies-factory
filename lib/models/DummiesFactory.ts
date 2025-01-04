import {
    DummiesFactoryArrayType,
    DummiesFactoryNumericType,
    DummiesFactoryProps,
    DummiesFactoryShape,
    DummiesFactoryStringTheme,
} from "../types";
import {
    DEFAULT_FACTORY_ARRAY_LENGTH,
    FoodCollection,
    FoodVideoGamesCollection,
    SportCollection,
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
    private array: DummiesFactoryArrayType;

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
        this.array = [];

        this.shapeHandler(shape);
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
        this.shapeHandler(shape);
    }

    private shapeHandler(shape: DummiesFactoryProps["shape"]) {
        if (shape.type === "string")
            this.array = this.getRandomStringArray({
                length: this.arrayLength,
                theme: this.shape.theme || "sport",
            });
        else if (shape.type === "number")
            this.array = this.getRandomNumericArray({
                length: this.arrayLength,
                numericType: this.shape.numericType || "integer",
                decimalPlaces: this.shape.decimalPlaces || 2,
                max: this.shape.max || 100,
                min: this.shape.min || 0,
            });
        else if (shape.type === "object")
            this.array = this.getRandomObjectArray();
    }

    private getRandomStringArray({
        length,
        theme,
    }: {
        length: number;
        theme: DummiesFactoryStringTheme;
    }): string[] {
        if (theme === "sport") return getRandomItems(SportCollection, length);
        else if (theme === "food")
            return getRandomItems(FoodCollection, length);
        else if (theme === "videoGames")
            return getRandomItems(FoodVideoGamesCollection, length);
        else return [];
    }

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
    }): number[] {
        return generateRandomArray({
            length,
            type: numericType,
            decimalPlaces,
            max,
            min,
        });
    }

    private getRandomObjectArray() {}

    /**
     * Returns the current finalized array
     *
     * @returns array
     */
    getArray(): DummiesFactoryArrayType[] {
        return this.array;
    }
}
