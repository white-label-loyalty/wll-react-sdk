import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { IS_WEB } from '../../../constants/device';
import { GRID_GAP } from '../../../constants/grid';
import { useWllSdk } from '../../../context/WllSdkContext';
import { TGroup } from '../../../types/group';
import { commonStyles } from '../../../utils/styling';
import { sortByPriority } from '../../../utils/transforms';
import { Skeleton, Text } from '../../atoms';
import Section from '../Section';

type GroupProps = {
  id: string;
};

type GroupContextType = {
  groupData: TGroup;
};

type GroupEmptyStateProps = {
  message: string;
};

/**
 * Context for providing group data to child components
 */
export const GroupContext = createContext<GroupContextType | undefined>(
  undefined
);

/**
 * Custom hook to access the GroupContext
 *
 * @returns {GroupContextType} The group context data
 * @throws {Error} If used outside of a GroupProvider
 */
export const useGroupContext = (): GroupContextType => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error('useGroupContext must be used within a GroupProvider');
  }
  return context;
};

/**
 * Custom hook to fetch and manage group data
 *
 * @param {string} id - The ID of the group to fetch
 * @returns {Object} Object containing group data, loading state, and any error
 */

const useGroupData = (id: string) => {
  const sdk = useWllSdk();
  const [groupData, setGroupData] = useState<TGroup | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGroup = useCallback(async () => {
    if (!id || !sdk || !sdk.getGroupByID) {
      setError('Unable to fetch group data: invalid configuration');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await sdk.getGroupByID(id);
      if (response && response.status === 'success' && response.data) {
        setGroupData(response.data);
      } else {
        setError((response && response.error) || 'Failed to fetch group data.');
      }
    } catch (err) {
      setError('Failed to fetch group data. Please try again later.');
      console.error('Error fetching group:', err);
    } finally {
      setIsLoading(false);
    }
  }, [id, sdk]);

  useEffect(() => {
    fetchGroup();
  }, [fetchGroup]);

  return { groupData, isLoading, error };
};

/**
 * Component to display an empty state with a message
 *
 * @param {GroupEmptyStateProps} props - Component props
 * @param {string} props.message - Message to display
 * @returns {JSX.Element} The empty state component
 */

export const GroupEmptyState = ({
  message,
}: GroupEmptyStateProps): JSX.Element => (
  <View
    style={commonStyles.emptyContainer}
    accessible
    accessibilityLabel={`Empty state: ${message}`}
  >
    <Text variant="body">{message}</Text>
  </View>
);

/**
 * Component to render all sections in a group
 *
 * @returns {JSX.Element} The sections component
 */

export const GroupSections = (): JSX.Element => {
  const { groupData } = useGroupContext();

  if (!groupData || !groupData.sections || groupData.sections.length === 0) {
    return <GroupEmptyState message="This group doesn't have any sections" />;
  }

  // Filter out inactive sections and null/undefined values before sorting
  const activeSections = groupData.sections.filter(
    (section) => section && section.active
  );

  if (activeSections.length === 0) {
    return (
      <GroupEmptyState message="This group doesn't have any active sections" />
    );
  }

  const sortedSections = sortByPriority(activeSections);

  const Container = IS_WEB ? View : ScrollView;

  return (
    <Container
      accessible
      accessibilityLabel={`Group: ${groupData.name || 'Unnamed group'}`}
      style={!IS_WEB ? styles.container : undefined}
    >
      {sortedSections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </Container>
  );
};

/**
 * A page-level component that represents a Group view in the application.
 *
 * This component serves as a container page that manages the fetching and display
 * of a group's data and its associated sections. It handles various states including
 * loading, errors, and empty states, providing a complete page experience for
 * viewing group content.
 *
 * @param {GroupProps} props - Component props
 * @param {string} props.id - The unique identifier of the group to fetch and display
 * @returns {JSX.Element|null} The rendered group or null if invalid ID
 */

const Group = ({ id }: GroupProps): JSX.Element | null => {
  if (!id) {
    console.warn('Group component requires id prop');
    return null;
  }

  const { groupData, isLoading, error } = useGroupData(id);

  if (isLoading) {
    return (
      <View
        style={commonStyles.emptyContainer}
        accessible
        accessibilityLabel="Loading group data"
      >
        <Skeleton />
      </View>
    );
  }

  if (error || !groupData) {
    return <GroupEmptyState message={error || 'No group data available'} />;
  }

  return (
    <GroupContext.Provider value={{ groupData }}>
      <View data-testid="group-container">
        <GroupSections />
      </View>
    </GroupContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    ...(IS_WEB ? {} : { padding: GRID_GAP }),
  },
});

export default Group;
