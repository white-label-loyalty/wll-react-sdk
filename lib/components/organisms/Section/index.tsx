import { useWllSdk } from '../../../context/WllSdkContext';
import {
  Section as SectionData,
  SectionType,
} from '../../../types/section';
import { Icon } from '../../atoms';
import { Carousel, Grid } from '../../molecules';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { StyleSheet, Text, View } from 'react-native';

type SectionContextType = {
  sectionData: SectionData | null;
  loading: boolean;
  error: Error | null;
};

export const SectionContext = createContext<
  SectionContextType | undefined
>(undefined);

type SectionProviderProps = {
  sectionId: string;
  children: React.ReactNode;
};

export const SectionProvider: React.FC<SectionProviderProps> = ({
  sectionId,
  children,
}) => {
  const [sectionData, setSectionData] = useState<SectionData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { getSectionByID } = useWllSdk();

  useEffect(() => {
    const fetchSection = async () => {
      try {
        setLoading(true);

        // // Simulate an error
        // const simulateError = true;

        // if (simulateError) {
        //   throw new Error("Simulated error in fetching section data");
        // }

        const { data, status } = await getSectionByID(sectionId);
        if (status === 'success') {
          setSectionData(data);
        } else {
          throw new Error(`Unexpected response status: ${status}`);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An unknown error occurred')
        );
      } finally {
        setLoading(false);
      }
    };
    fetchSection();
  }, [sectionId, getSectionByID]);

  return (
    <SectionContext.Provider value={{ sectionData, loading, error }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error(
      'useSectionContext must be used within a SectionProvider'
    );
  }
  return context;
};

const SectionContent: React.FC = () => {
  const { theme } = useWllSdk();
  const { sectionData, error } = useSectionContext();

  if (error)
    return (
      <View
        style={[
          styles.sectionContent,
          { borderRadius: theme.sizes.borderRadius },
        ]}
      >
        <Icon name="AlertTriangle" size={24} color="#967132" />
        <Text style={styles.sectionContentText}>
          Error: {error.message}
        </Text>
      </View>
    );

  if (!sectionData) return null;

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

interface SectionProps {
  section: SectionData;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <SectionProvider sectionId={section.id}>
      <View style={styles.section}>
        <SectionContent />
      </View>
    </SectionProvider>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: 1080,
    marginHorizontal: 'auto',
  },
  sectionContent: {
    width: '100%',
    maxWidth: 1080,
    marginHorizontal: 'auto',
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#DACF8A',
    borderWidth: 1,
    backgroundColor: '#F8F3D6',
  },
  sectionContentText: {
    color: '#967132',
    fontSize: 16,
    marginLeft: 16,
  },
});

export default Section;
