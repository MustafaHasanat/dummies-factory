/**
 * The props for the DummiesFactory class constructor
 */
export type BaseFactoryProps = {
    // required
    shape: DummiesFactoryShape;
    // optional
    arrayLength?: number;
};

export type ApiFactoryProps = {
    backendUrl?: string;
};

/**
 * The type of the DummiesFactory class resultant objects' items
 */
export type DummiesFactoryItemType =
    | "string"
    | "enum"
    | "number"
    | "array"
    | "object";

export type DummiesFactoryEnumOptionsType = (
    | string
    | number
    | any[]
    | { [key: string]: any }
)[];

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
    | "skills"
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
    // enum props
    options?: DummiesFactoryEnumOptionsType;
    // numeric props
    numericType?: DummiesFactoryNumericType;
    min?: number;
    max?: number;
    decimalPlaces?: number;
    // array props
    arrayOf?: DummiesFactoryShape;
    arrayLength?: number;
    // object props
    properties?: { [key: string]: DummiesFactoryShape };
};
