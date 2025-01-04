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
export type DummiesFactoryItemType = "string" | "number" | "array" | "object";

/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryStringTheme =
    | "uuid"
    | "sport"
    | "food"
    | "videoGames"
    | "american-names"
    | "arabic-names"
    | "country"
    | "place";
export type DummiesFactoryNumericType = "integer" | "decimal";

export type DummiesFactoryItemsCollectionType = string[];

/**
 * The shape of the DummiesFactory class resultant objects
 */
export type DummiesFactoryShape = {
    // main type
    type: DummiesFactoryItemType;
    // string props
    theme?: DummiesFactoryStringTheme;
    // numeric props
    numericType?: DummiesFactoryNumericType;
    min?: number;
    max?: number;
    decimalPlaces?: number;
    // array props
    arrayOf?: DummiesFactoryShape;
    // object props
    properties?: { [key: string]: DummiesFactoryShape };
};
