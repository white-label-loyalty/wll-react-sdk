import React, { createContext, useContext } from 'react';
import { View } from 'react-native';
import { SectionType, TSection } from '../../../types/section';
import { Carousel, Grid } from '../../molecules';
import { useSectionStyles } from './styles';

type SectionContextType = {
  sectionData: TSection;
};

type SectionProps = {
  section: TSection;
};

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};

const Section: React.FC<SectionProps> = ({ section }) => {
  const styles = useSectionStyles();

  const renderSectionContent = () => {
    switch (section.type) {
      case SectionType.Banner:
        return <Carousel section={section} />;
      case SectionType.Grid:
        return <Grid section={section} />;
      default:
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }
  };

  return (
    <SectionContext.Provider value={{ sectionData: section }}>
      <View style={styles.section}>{renderSectionContent()}</View>
    </SectionContext.Provider>
  );
};

export default Section;
