import React, { createContext, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { SectionType, TSection } from '../../../types/section';
import { Carousel, Grid } from '../../molecules';

type SectionContextType = {
  sectionData: TSection;
};

type SectionProps = {
  section: TSection;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};

const Section: React.FC<SectionProps> = ({ section }) => {
  const { theme } = useWllSdk();

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
      <View
        style={[styles.section, { borderRadius: theme.sizes.borderRadiusSm }]}
      >
        {renderSectionContent()}
      </View>
    </SectionContext.Provider>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: 1080,
    marginHorizontal: 'auto',
  },
});

export default Section;
