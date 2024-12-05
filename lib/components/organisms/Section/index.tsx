import React, { createContext, useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { SectionType, TSection } from '../../../types/section';
import { commonStyles } from '../../../utils/styling';
import { Skeleton } from '../../atoms';
import { Carousel, Grid } from '../../molecules';
import { useSectionStyles } from './styles';

type SectionContextType = {
  sectionData: TSection;
};

type SectionProps = {
  section?: TSection;
  sectionId?: string;
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

const Section: React.FC<SectionProps> = ({ section, sectionId }) => {
  const styles = useSectionStyles();
  const { getSectionByID } = useWllSdk();
  const [sectionData, setSectionData] = useState<TSection | null>(
    section || null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (section) {
      setSectionData(section);
    } else if (sectionId) {
      const fetchSection = async () => {
        setIsLoading(true);
        try {
          const response = await getSectionByID(sectionId);
          if (response.status === 'success' && response.data) {
            setSectionData(response.data);
          } else {
            setError(response.error || 'Failed to fetch section');
          }
        } catch (err) {
          setError(
            err instanceof Error ? err.message : 'Failed to fetch section'
          );
        } finally {
          setIsLoading(false);
        }
      };
      fetchSection();
    }
  }, [section, sectionId, getSectionByID]);

  const renderSectionContent = () => {
    if (isLoading) {
      return (
        <View style={commonStyles.emptyContainer}>
          <Skeleton />
        </View>
      );
    }

    if (error || !sectionData) {
      return (
        <View style={commonStyles.emptyContainer}>
          <Text>No section data available</Text>
        </View>
      );
    }

    switch (sectionData.type) {
      case SectionType.Banner:
        return <Carousel section={sectionData} />;
      case SectionType.Grid:
        return <Grid section={sectionData} />;
      default:
        console.warn(`Unknown section type: ${sectionData.type}`);
        return null;
    }
  };

  if (!section && !sectionId) {
    console.warn('Section component requires either section or sectionId prop');
    return null;
  }

  return sectionData ? (
    <SectionContext.Provider value={{ sectionData }}>
      <View style={styles.section}>{renderSectionContent()}</View>
    </SectionContext.Provider>
  ) : null;
};

export default Section;
