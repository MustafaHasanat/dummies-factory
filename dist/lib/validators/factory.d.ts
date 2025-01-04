import { DummiesFactoryProps } from "../types";
export declare function validateArrayLength(
    arrayLength: DummiesFactoryProps["arrayLength"]
): void;
export declare function validateShape({
    type,
    decimalPlaces,
    max,
    min,
    numericType,
    theme,
}: DummiesFactoryProps["shape"]): void;
export declare function validateFactoryConstructor({
    arrayLength,
    shape,
}: DummiesFactoryProps): void;
