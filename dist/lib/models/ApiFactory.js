var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validateBackendUrl } from "../validators";
import axios from "axios";
import { join } from "path";
import { BaseFactory } from "./BaseFactory";
/**
 *
 */
export class ApiFactory extends BaseFactory {
    /**
     *
     * @param param0
     */
    constructor(shape, arrayLength, backendUrl) {
        super(shape, arrayLength);
        this.backendUrl = backendUrl;
    }
    /**
     * Returns the current backendUrl
     *
     * @returns backendUrl
     */
    getBackendUrl() {
        return this.backendUrl;
    }
    /**
     * Adjust the current backendUrl
     *
     * @param backendUrl
     */
    setBackendUrl(backendUrl) {
        validateBackendUrl(backendUrl);
        this.backendUrl = backendUrl;
    }
    /**
     * Fill your database with the currently generated array
     */
    fillDatabase(endpoint, config) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this.array.map((object) => __awaiter(this, void 0, void 0, function* () {
                return this.backendUrl &&
                    (yield axios.post(join(this.backendUrl, endpoint), object, config));
            })));
        });
    }
}
//# sourceMappingURL=ApiFactory.js.map