import React from "react";
import { Variant } from "../../../types/theme";
type ButtonProps = {
    title: string;
    onPress: () => void;
    variant: Variant;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
