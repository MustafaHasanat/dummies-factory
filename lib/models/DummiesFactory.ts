import { ApiFactoryProps, BaseFactoryProps } from "../types";
import { DEFAULT_FACTORY_ARRAY_LENGTH } from "../constants";
import { RandomizerFactory } from "./RandomizerFactory";

/**
 *
 */
export class DummiesFactory extends RandomizerFactory {
    /**
     *
     * @param param0
     */
    constructor(
        shape: BaseFactoryProps["shape"],
        arrayLength: BaseFactoryProps["arrayLength"] = DEFAULT_FACTORY_ARRAY_LENGTH,
        backendUrl: ApiFactoryProps["backendUrl"]
    ) {
        super(shape, arrayLength, backendUrl);
    }
}
