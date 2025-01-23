import { ApiFactoryProps, BaseFactoryProps } from "../types";
import { RandomizerFactory } from "./RandomizerFactory";
/**
 *
 */
export declare class DummiesFactory extends RandomizerFactory {
    /**
     *
     * @param param0
     */
    constructor(shape: BaseFactoryProps["shape"], arrayLength?: BaseFactoryProps["arrayLength"], backendUrl?: ApiFactoryProps["backendUrl"]);
}
