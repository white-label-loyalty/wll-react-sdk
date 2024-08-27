import React from "react";
import { Size, Variant } from "../../../types/theme";
export type ProgressBarProps = {
    percentage: number;
    variant?: Variant;
    height?: Size;
};
declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
