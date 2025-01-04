/**
 * The props for the DummiesFactory class constructor
 */
export interface DummiesFactoryProps {
    shape: DummiesFactoryShape;
    arrayLength?: number;
}
/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryItemType = "string" | "number" | "array" | "object";
/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryStringTheme = "uuid" | "sport" | "food" | "videoGames" | "american-names" | "arabic-names" | "country" | "place";
export type DummiesFactoryNumericType = "integer" | "decimal";
export type DummiesFactoryItemsCollectionType = string[];
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
    arrayOf?: DummiesFactoryShape;
    properties?: {
        [key: string]: DummiesFactoryShape;
    };
};
