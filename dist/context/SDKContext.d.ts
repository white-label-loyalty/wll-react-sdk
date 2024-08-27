import React, { ReactNode } from "react";
import { Section } from "../types/section";
import { Tile } from "../types/tile";
type SDKConfig = {
    apiKey: string;
    baseUrl: string;
    proxyEndpoint?: string;
};
type APIResponse<T> = {
    data: T;
    status: string;
};
type SDKContextType = {
    getSectionByID: (id: string) => Promise<APIResponse<Section>>;
    getTileByID: (id: string) => Promise<APIResponse<Tile>>;
};
type SDKProviderType = {
    config: SDKConfig;
    children: ReactNode;
};
export declare const SDKProvider: React.FC<SDKProviderType>;
export declare const useSDK: () => SDKContextType;
export {};
