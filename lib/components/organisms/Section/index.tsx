import React, { createContext, useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { SectionType, TSection } from '../../../types/section';
import { commonStyles } from '../../../utils/styling';
import { sortByPriority } from '../../../utils/transforms';
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
 *
 * @returns {SectionContextType} The section context value
 * @throws {Error} If used outside of a SectionProvider
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
 *
 * @param {TSection} [section] - The section data if provided directly
 * @param {string} [sectionId] - The ID of the section to fetch
 * @returns {Object} Object containing section data, loading state, and any error
 */

const useSectionData = (
  section?: TSection,
  sectionId?: string
): {
  sectionData: TSection | null;
  isLoading: boolean;
  error: string | null;
} => {
  const sdk = useWllSdk();
  const [sectionData, setSectionData] = useState<TSection | null>(
    section || null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (section) {
      setSectionData(section);
    } else if (sectionId && sdk && sdk.getSectionByID) {
      const fetchSection = async () => {
        setIsLoading(true);
        try {
          const response = await sdk.getSectionByID(sectionId);
          if (response && response.status === 'success' && response.data) {
            setSectionData(response.data);
          } else {
            setError(
              (response && response.error) || 'Failed to fetch section data.'
            );
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
  }, [section, sectionId, sdk]);

  return { sectionData, isLoading, error };
};

/**
 * Component to display an empty state with a message.
 *
 * @param {Object} props - Component props
 * @param {string} props.message - Message to display in the empty state
 * @returns {JSX.Element} The empty state component
 */

const EmptyState = ({ message }: { message: string }): JSX.Element => (
  <View
    style={commonStyles.emptyContainer}
    role="article"
    accessibilityLabel={`Empty state: ${message}`}
  >
    <Text>{message}</Text>
  </View>
);

/**
 * The Section component renders a section based on its type (e.g., Banner, Grid).
 *
 * @param {SectionProps} props - Component props
 * @param {TSection} [props.section] - The section data
 * @param {string} [props.sectionId] - The ID of the section to fetch
 * @returns {JSX.Element|null} The rendered section or null if invalid props
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
    const activeTiles =
      sectionData.tiles &&
      sortByPriority(sectionData.tiles.filter((tile) => tile && tile.active));

    if (!activeTiles || activeTiles.length === 0) {
      return <EmptyState message="No active tiles available." />;
    }

    const sectionWithActiveTiles = { ...sectionData, tiles: activeTiles };

    if (!sectionData.type) {
      console.warn('Section is missing a type');
      return <EmptyState message="Invalid section configuration." />;
    }

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
        accessibilityLabel={`Section: ${sectionData.title || 'Untitled section'}`}
        accessibilityHint={sectionData.description || undefined}
        role="region"
      >
        {renderSectionContent()}
      </View>
    </SectionContext.Provider>
  ) : null;
};

export default Section;
