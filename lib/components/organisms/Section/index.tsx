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

/**
 * SectionContext provides the current section data to child components.
 */
export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

/**
 * Custom hook to access the SectionContext.
 */
export const useSectionContext = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};

/**
 * Custom hook to fetch section data.
 */
const useSectionData = (
  section?: TSection,
  sectionId?: string
): {
  sectionData: TSection | null;
  isLoading: boolean;
  error: string | null;
} => {
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
            setError(response.error || 'Failed to fetch section data.');
          }
        } catch (err) {
          setError(
            err instanceof Error ? err.message : 'Failed to fetch section data.'
          );
        } finally {
          setIsLoading(false);
        }
      };
      fetchSection();
    }
  }, [section, sectionId, getSectionByID]);

  return { sectionData, isLoading, error };
};

/**
 * Component to display an empty state with a message.
 */
const EmptyState = ({ message }: { message: string }): JSX.Element => (
  <View
    style={commonStyles.emptyContainer}
    accessible
    accessibilityLabel={`Empty state: ${message}`}
  >
    <Text
      accessibilityElementsHidden={true}
      importantForAccessibility="no-hide-descendants"
    >
      {message}
    </Text>
  </View>
);

/**
 * The Section component renders a section based on its type (e.g., Banner, Grid).
 */
const Section = ({ section, sectionId }: SectionProps): JSX.Element | null => {
  const styles = useSectionStyles();
  const { sectionData, isLoading, error } = useSectionData(section, sectionId);

  if (!section && !sectionId) {
    console.warn(
      'Section component requires either section or sectionId prop.'
    );
    return null;
  }

  const renderSectionContent = (): JSX.Element | null => {
    if (isLoading) {
      return (
        <Skeleton aria-label="Loading section content" numberOfSquares={4} />
      );
    }

    if (error || !sectionData) {
      return <EmptyState message={error || 'No section data available.'} />;
    }

    // Filter out inactive tiles before passing to child components
    const activeTiles = sectionData.tiles.filter((tile) => tile.active);
    const sectionWithActiveTiles = { ...sectionData, tiles: activeTiles };

    switch (sectionData.type) {
      case SectionType.Banner:
        return <Carousel section={sectionWithActiveTiles} />;
      case SectionType.Grid:
        return <Grid section={sectionWithActiveTiles} />;
      default:
        console.warn(`Unknown section type: ${sectionData.type}`);
        return <EmptyState message="Unknown section type." />;
    }
  };

  return sectionData ? (
    <SectionContext.Provider value={{ sectionData }}>
      <View
        style={styles.section}
        accessible
        role="region"
        aria-label={`Section: ${sectionData.title || 'Untitled section'}`}
        aria-description={sectionData.description || undefined}
      >
        {renderSectionContent()}
      </View>
    </SectionContext.Provider>
  ) : null;
};

export default Section;
