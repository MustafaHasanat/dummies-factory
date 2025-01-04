import { DummiesFactoryProps } from "../types";

export function validateArrayLength(
    arrayLength: DummiesFactoryProps["arrayLength"]
) {
    if (Number(arrayLength) < 1) {
        throw new Error(
            `Array length cannot be less than 1, got "${arrayLength}"`
        );
    }
}

export function validateShape(shape: DummiesFactoryProps["shape"]) {}

export function validateFactoryConstructor({
    arrayLength,
    shape,
}: DummiesFactoryProps): void {
    validateArrayLength(arrayLength);
    validateShape(shape);
}
