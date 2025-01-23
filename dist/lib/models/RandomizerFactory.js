import { americanNamesCollection, arabicNamesCollection, countriesCollection, DEFAULT_FACTORY_ARRAY_LENGTH, foodsCollection, placesCollection, skillsCollection, sportsCollection, videoGamesCollection, } from "../constants";
import { validateShape } from "../validators";
import { generateRandomArray, generateRandomUUIDs, getRandomItems } from "../helpers";
import { ApiFactory } from "./ApiFactory";
/**
 *
 */
export class RandomizerFactory extends ApiFactory {
    /**
     *
     * @param param0
     */
    constructor(shape, arrayLength = DEFAULT_FACTORY_ARRAY_LENGTH, backendUrl) {
        super(shape, arrayLength, backendUrl);
        this.array = this.getArrayFromShape({ shape, arrayLength });
    }
    /**
     * Adjust the current shape
     *
     * @param shape
     */
    setShape(shape) {
        validateShape(shape);
        this.shape = shape;
        this.array = this.getArrayFromShape({ shape });
    }
    getArrayFromShape({ shape, arrayLength = DEFAULT_FACTORY_ARRAY_LENGTH, }) {
        if (shape.type === "string")
            return this.getRandomStringArray({
                length: arrayLength,
                theme: shape.theme || "sport",
            });
        else if (shape.type === "enum")
            return shape.options
                ? getRandomItems(shape.options, arrayLength)
                : [];
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
                arrayLength,
                arrayOf: shape.arrayOf,
            });
        else if (shape.type === "object")
            return this.getRandomObjectArray({
                length: arrayLength,
                properties: shape.properties,
            });
        return [];
    }
    /**
     * Generate an array of string following the provided theme and length
     *
     * @param length array length
     * @param theme strings' theme
     *
     * @returns array of thematic string
     */
    getRandomStringArray({ length, theme, }) {
        if (theme === "sport")
            return getRandomItems(sportsCollection, length);
        else if (theme === "food")
            return getRandomItems(foodsCollection, length);
        else if (theme === "videoGames")
            return getRandomItems(videoGamesCollection, length);
        else if (theme === "uuid")
            return generateRandomUUIDs(length);
        else if (theme === "american-names")
            return getRandomItems(americanNamesCollection, length);
        else if (theme === "arabic-names")
            return getRandomItems(arabicNamesCollection, length);
        else if (theme === "country")
            return getRandomItems(countriesCollection, length);
        else if (theme === "place")
            return getRandomItems(placesCollection, length);
        else if (theme === "skills")
            return getRandomItems(skillsCollection, length);
        else
            return [];
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
    getRandomNumericArray({ length, numericType, decimalPlaces, max, min, }) {
        return generateRandomArray({
            length,
            type: numericType,
            decimalPlaces,
            max,
            min,
        });
    }
    getRandomArraysArray({ arrayLength, arrayOf, }) {
        if (!arrayLength || !arrayOf)
            return [];
        const array = [];
        new Array(length).fill(0).forEach(() => {
            const result = this.getArrayFromShape({
                shape: arrayOf,
                arrayLength: 1,
            });
            array.push(result);
        });
        return array;
    }
    getRandomObjectArray({ length, properties, }) {
        if (!properties)
            return [];
        const array = [];
        new Array(length).fill(0).forEach(() => {
            const object = {};
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
}
//# sourceMappingURL=RandomizerFactory.js.map