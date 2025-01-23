import { ApiFactoryProps, BaseFactoryProps } from "../types";
import { AxiosRequestConfig } from "axios";
import { BaseFactory } from "./BaseFactory";
/**
 *
 */
export declare class ApiFactory extends BaseFactory {
    protected backendUrl: string | undefined;
    /**
     *
     * @param param0
     */
    constructor(shape: BaseFactoryProps["shape"], arrayLength?: BaseFactoryProps["arrayLength"], backendUrl?: ApiFactoryProps["backendUrl"]);
    /**
     * Returns the current backendUrl
     *
     * @returns backendUrl
     */
    getBackendUrl(): ApiFactoryProps["backendUrl"];
    /**
     * Adjust the current backendUrl
     *
     * @param backendUrl
     */
    setBackendUrl(backendUrl: ApiFactoryProps["backendUrl"]): void;
    /**
     * Fill your database with the currently generated array
     */
    fillDatabase(endpoint: string, config?: AxiosRequestConfig<any>): Promise<void>;
}
