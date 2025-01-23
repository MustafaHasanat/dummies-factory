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
    constructor(shape, arrayLength, backendUrl) {
        super(shape, arrayLength || DEFAULT_FACTORY_ARRAY_LENGTH, backendUrl);
    }
}
//# sourceMappingURL=DummiesFactory.js.map