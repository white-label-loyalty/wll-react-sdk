export declare const getDerivedColor: (color: string) => string;
export declare const getReadableTextColor: (backgroundColor: string) => string;
type PercentageKey = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95;
export type DerivedColors = {
    [K in PercentageKey]: string;
};
export declare const getDerivedColorPercentages: (color: string) => DerivedColors;
export {};
