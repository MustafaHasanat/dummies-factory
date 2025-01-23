import { ApiFactoryProps, BaseFactoryProps } from "../types";
import { ApiFactory } from "./ApiFactory";
/**
 *
 */
export declare class RandomizerFactory extends ApiFactory {
    /**
     *
     * @param param0
     */
    constructor(shape: BaseFactoryProps["shape"], arrayLength: BaseFactoryProps["arrayLength"], backendUrl: ApiFactoryProps["backendUrl"]);
    /**
     * Adjust the current shape
     *
     * @param shape
     */
    setShape(shape: BaseFactoryProps["shape"]): void;
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
}
