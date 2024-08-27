type ResponsiveStyle<T> = {
    [K in keyof T]: T[K] | [T[K], T[K], T[K]];
};
export declare const createResponsiveStyle: <T extends object>(style: ResponsiveStyle<T>) => T;
export {};
