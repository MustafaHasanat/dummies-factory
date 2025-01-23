/**
 * The props for the DummiesFactory class constructor
 */
export type BaseFactoryProps = {
    shape: DummiesFactoryShape;
    arrayLength?: number;
};
export type ApiFactoryProps = {
    backendUrl?: string;
};
/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryItemType = "string" | "enum" | "number" | "array" | "object";
export type DummiesFactoryEnumOptionsType = (string | number | any[] | {
    [key: string]: any;
})[];
/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryStringTheme = "uuid" | "sport" | "food" | "videoGames" | "american-names" | "arabic-names" | "country" | "skills" | "place";
export type DummiesFactoryNumericType = "integer" | "decimal";
export type DummiesFactoryItemsCollectionType = string[];
/**
 * The shape of the DummiesFactory class resultant objects
 */
export type DummiesFactoryShape = {
    type: DummiesFactoryItemType;
    theme?: DummiesFactoryStringTheme;
    options?: DummiesFactoryEnumOptionsType;
    numericType?: DummiesFactoryNumericType;
    min?: number;
    max?: number;
    decimalPlaces?: number;
    arrayOf?: DummiesFactoryShape;
    arrayLength?: number;
    properties?: {
        [key: string]: DummiesFactoryShape;
    };
};
