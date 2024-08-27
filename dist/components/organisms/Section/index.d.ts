import { Section as SectionData } from "../../../types/section";
import React from "react";
type SectionContextType = {
    sectionData: SectionData | null;
    loading: boolean;
    error: Error | null;
};
export declare const SectionContext: React.Context<SectionContextType | undefined>;
type SectionProviderProps = {
    sectionId: string;
    children: React.ReactNode;
};
export declare const SectionProvider: React.FC<SectionProviderProps>;
export declare const useSectionContext: () => SectionContextType;
declare const Section: React.FC<{
    sectionId: string;
}>;
export default Section;
