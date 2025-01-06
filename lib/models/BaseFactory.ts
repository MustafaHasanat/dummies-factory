import { BaseFactoryProps, DummiesFactoryShape } from "../types";
import { DEFAULT_FACTORY_ARRAY_LENGTH } from "../constants";
import { validateArrayLength } from "../validators";
import { validateShape } from "lib/validators/factory";

/**
 *
 */
export class BaseFactory {
    protected arrayLength: number;
    protected shape: DummiesFactoryShape;
    protected array: any[];

    /**
     *
     * @param param0
     */
    constructor(
        shape: BaseFactoryProps["shape"],
        arrayLength: BaseFactoryProps["arrayLength"] = DEFAULT_FACTORY_ARRAY_LENGTH
    ) {
        validateShape(shape);
        validateArrayLength(arrayLength);

        this.shape = shape;
        this.arrayLength = arrayLength;
        this.array = [];
    }

    /**
     * Returns the current shape
     *
     * @returns shape
     */
    getShape(): BaseFactoryProps["shape"] {
        return this.shape;
    }

    /**
     * Returns the current arrayLength
     *
     * @returns arrayLength
     */
    getArrayLength(): BaseFactoryProps["arrayLength"] {
        return this.arrayLength;
    }

    /**
     * Adjust the current arrayLength
     *
     * @param arrayLength
     */
    setArrayLength(arrayLength: BaseFactoryProps["arrayLength"]): void {
        validateArrayLength(arrayLength);
        this.arrayLength = arrayLength || DEFAULT_FACTORY_ARRAY_LENGTH;
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
