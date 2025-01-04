import { DummiesFactoryArrayType, DummiesFactoryProps } from "../types";
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
    constructor({ shape, arrayLength, }: DummiesFactoryProps);
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
    private shapeHandler;
    private getRandomStringArray;
    /**
     * Returns the current finalized array
     *
     * @returns array
     */
    getArray(): DummiesFactoryArrayType[];
}
