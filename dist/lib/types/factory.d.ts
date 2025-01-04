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
export type DummiesFactoryItemType = "string" | "number" | "object";
/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryStringTheme = "sport" | "food" | "videoGames";
export type DummiesFactoryNumericTheme = "integer" | "decimal";
export type DummiesFactoryCollectionType = "string" | "number";
export type DummiesFactoryItemsCollectionType = string[];
export type DummiesFactoryCollection = {
    type: DummiesFactoryCollectionType;
    theme: DummiesFactoryStringTheme | DummiesFactoryNumericTheme;
};
/**
 *
 * */
export type DummiesFactoryArrayType = any[];
/**
 * The shape of the DummiesFactory class resultant objects
 */
export type DummiesFactoryShape = {
    type: DummiesFactoryItemType;
    collection: DummiesFactoryCollection;
};
