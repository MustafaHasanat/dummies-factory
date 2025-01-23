import { DEFAULT_FACTORY_ARRAY_LENGTH } from "../constants";
import { validateArrayLength, validateShape } from "../validators";
/**
 *
 */
export class BaseFactory {
    /**
     *
     * @param param0
     */
    constructor(shape, arrayLength) {
        validateShape(shape);
        validateArrayLength(arrayLength);
        this.shape = shape;
        this.arrayLength = arrayLength || DEFAULT_FACTORY_ARRAY_LENGTH;
        this.array = [];
    }
    /**
     * Returns the current shape
     *
     * @returns shape
     */
    getShape() {
        return this.shape;
    }
    /**
     * Returns the current arrayLength
     *
     * @returns arrayLength
     */
    getArrayLength() {
        return this.arrayLength;
    }
    /**
     * Adjust the current arrayLength
     *
     * @param arrayLength
     */
    setArrayLength(arrayLength) {
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
            : currentArray;
    }
}
//# sourceMappingURL=BaseFactory.js.map