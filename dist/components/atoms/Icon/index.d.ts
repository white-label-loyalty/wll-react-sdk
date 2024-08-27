import * as LucideIcons from "lucide-react";
import React from "react";
type IconName = keyof typeof LucideIcons;
type IconProps = {
    name: IconName;
    color?: string;
    size?: number;
    strokeWidth?: number;
};
declare const Icon: React.FC<IconProps>;
export default Icon;
