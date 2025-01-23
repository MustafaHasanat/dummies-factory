import { BaseFactoryProps, DummiesFactoryShape } from "../types";
/**
 *
 */
export declare class BaseFactory {
    protected arrayLength: number;
    protected shape: DummiesFactoryShape;
    protected array: any[];
    /**
     *
     * @param param0
     */
    constructor(shape: BaseFactoryProps["shape"], arrayLength?: BaseFactoryProps["arrayLength"]);
    /**
     * Returns the current shape
     *
     * @returns shape
     */
    getShape(): BaseFactoryProps["shape"];
    /**
     * Returns the current arrayLength
     *
     * @returns arrayLength
     */
    getArrayLength(): BaseFactoryProps["arrayLength"];
    /**
     * Adjust the current arrayLength
     *
     * @param arrayLength
     */
    setArrayLength(arrayLength: BaseFactoryProps["arrayLength"]): void;
    /**
     * Returns the current finalized array
     *
     * @returns array
     */
    getArray(): any;
}
