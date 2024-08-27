import React from "react";
import { Size, Variant } from "../../../types/theme";
export type ProgressIndicatorProps = {
    currentPoints: number;
    maxPoints: number;
    variant?: Variant;
    height?: Size;
    attained?: boolean;
};
export declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
export default ProgressIndicator;
