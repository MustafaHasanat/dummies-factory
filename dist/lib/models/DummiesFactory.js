import { DEFAULT_FACTORY_ARRAY_LENGTH, FoodCollection, FoodVideoGamesCollection, SportCollection, } from "../constants";
import { validateArrayLength, validateFactoryConstructor, validateShape, } from "../validators";
import { getRandomItems } from "../helpers";
/**
 *
 */
export class DummiesFactory {
    /**
     *
     * @param param0
     */
    constructor({ shape, arrayLength = DEFAULT_FACTORY_ARRAY_LENGTH, }) {
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
     * Returns the current shape
     *
     * @returns shape
     */
    getShape() {
        return this.shape;
    }
    /**
     * Adjust the current shape
     *
     * @param shape
     */
    setShape(shape) {
        validateShape(shape);
        this.shape = shape;
        this.shapeHandler(shape);
    }
    shapeHandler(shape) {
        if (shape.type === "string")
            this.array = this.getRandomStringArray(this.arrayLength, this.shape.collection);
        else if (shape.type === "number")
            this.array = [];
        else if (shape.type === "object")
            this.array = [];
    }
    getRandomStringArray(length, collection) {
        if (collection.theme === "sport")
            return getRandomItems(SportCollection, length);
        else if (collection.theme === "food")
            return getRandomItems(FoodCollection, length);
        else if (collection.theme === "videoGames")
            return getRandomItems(FoodVideoGamesCollection, length);
        else
            return [];
    }
    /**
     * Returns the current finalized array
     *
     * @returns array
     */
    getArray() {
        return this.array;
    }
}
//# sourceMappingURL=DummiesFactory.js.map