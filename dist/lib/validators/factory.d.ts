import { ApiFactoryProps, BaseFactoryProps } from "../types";
export declare function validateArrayLength(arrayLength: BaseFactoryProps["arrayLength"]): void;
export declare function validateShape({ type, decimalPlaces, max, min, numericType, theme, }: BaseFactoryProps["shape"]): void;
export declare function validateBackendUrl(backendUrl: ApiFactoryProps["backendUrl"]): void;
export declare function validateFactoryConstructor({ arrayLength, shape, backendUrl, }: BaseFactoryProps & ApiFactoryProps): void;
