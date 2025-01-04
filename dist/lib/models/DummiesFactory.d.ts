import { DummiesFactoryProps } from "../types";
/**
 *
 */
export declare class DummiesFactory {
    private arrayLength;
    private shape;
    private array;
    /**
     *
     * @param param0
     */
    constructor({ shape, arrayLength }: DummiesFactoryProps);
    /**
     * Returns the current arrayLength
     *
     * @returns arrayLength
     */
    getArrayLength(): DummiesFactoryProps["arrayLength"];
    /**
     * Adjust the current arrayLength
     *
     * @param arrayLength
     */
    setArrayLength(arrayLength: DummiesFactoryProps["arrayLength"]): void;
    /**
     * Returns the current shape
     *
     * @returns shape
     */
    getShape(): DummiesFactoryProps["shape"];
    /**
     * Adjust the current shape
     *
     * @param shape
     */
    setShape(shape: DummiesFactoryProps["shape"]): void;
    private getArrayFromShape;
    /**
     * Generate an array of string following the provided theme and length
     *
     * @param length array length
     * @param theme strings' theme
     *
     * @returns array of thematic string
     */
    private getRandomStringArray;
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
    private getRandomNumericArray;
    private getRandomArraysArray;
    private getRandomObjectArray;
    /**
     * Returns the current finalized array
     *
     * @returns array
     */
    getArray(): any;
}
