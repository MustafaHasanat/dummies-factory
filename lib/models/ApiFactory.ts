import { ApiFactoryProps, BaseFactoryProps } from "../types";
import { validateBackendUrl } from "../validators";
import axios, { AxiosRequestConfig } from "axios";
import { join } from "path";
import { BaseFactory } from "./BaseFactory";

/**
 *
 */
export class ApiFactory extends BaseFactory {
    protected backendUrl;

    /**
     *
     * @param param0
     */
    constructor(
        shape: BaseFactoryProps["shape"],
        arrayLength?: BaseFactoryProps["arrayLength"],
        backendUrl?: ApiFactoryProps["backendUrl"]
    ) {
        super(shape, arrayLength);
        this.backendUrl = backendUrl;
    }

    /**
     * Returns the current backendUrl
     *
     * @returns backendUrl
     */
    getBackendUrl(): ApiFactoryProps["backendUrl"] {
        return this.backendUrl;
    }

    /**
     * Adjust the current backendUrl
     *
     * @param backendUrl
     */
    setBackendUrl(backendUrl: ApiFactoryProps["backendUrl"]): void {
        validateBackendUrl(backendUrl);
        this.backendUrl = backendUrl;
    }

    /**
     * Fill your database with the currently generated array
     */
    async fillDatabase(endpoint: string, config?: AxiosRequestConfig<any>) {
        await Promise.all(
            this.array.map(
                async (object) =>
                    this.backendUrl &&
                    (await axios.post(
                        join(this.backendUrl, endpoint),
                        object,
                        config
                    ))
            )
        );
    }
}
