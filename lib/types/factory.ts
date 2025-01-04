/**
 * The props for the DummiesFactory class constructor
 */
export interface DummiesFactoryProps {
    // required
    shape: DummiesFactoryShape;
    // optional
    arrayLength?: number;
}

/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryItemType = "string" | "number" | "object";

/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryStringTheme = "sport" | "food" | "videoGames";
export type DummiesFactoryNumericType = "integer" | "decimal";

export type DummiesFactoryItemsCollectionType = string[];

/**
 *
 * */
export type DummiesFactoryArrayType = any[];

/**
 * The shape of the DummiesFactory class resultant objects
 */
export type DummiesFactoryShape = {
    type: DummiesFactoryItemType;
    theme?: DummiesFactoryStringTheme;
    numericType?: DummiesFactoryNumericType;
    min?: number;
    max?: number;
    decimalPlaces?: number;
};
