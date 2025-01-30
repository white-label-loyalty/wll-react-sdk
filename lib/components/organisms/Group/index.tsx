import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { View } from 'react-native';
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

export const GroupContext = createContext<GroupContextType | undefined>(
  undefined
);

export const useGroupContext = (): GroupContextType => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error('useGroupContext must be used within a GroupProvider');
  }
  return context;
};

// Custom Hook for Group Data
const useGroupData = (id: string) => {
  const { getGroupByID } = useWllSdk();
  const [groupData, setGroupData] = useState<TGroup | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchGroup = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getGroupByID(id);
      if (response.status === 'success' && response.data) {
        setGroupData(response.data);
      } else {
        setError(response.error || 'Failed to fetch group data.');
      }
    } catch (err) {
      setError('Failed to fetch group data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [id, getGroupByID]);

  useEffect(() => {
    fetchGroup();
  }, [fetchGroup]);

  return { groupData, isLoading, error };
};

/**
 * A page-level component that represents a Group view in the application.
 *
 * This component serves as a container page that manages the fetching and display
 * of a group's data and its associated sections. It handles various states including
 * loading, errors, and empty states, providing a complete page experience for
 * viewing group content.
 *
 * @param id - The unique identifier of the group to fetch and display.
 */

const Group = ({ id }: GroupProps): JSX.Element | null => {
  if (!id) return null;

  const { groupData, isLoading, error } = useGroupData(id);

  if (isLoading) {
    return (
      <View style={commonStyles.emptyContainer}>
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

export default Group;

export const GroupSections = (): JSX.Element => {
  const { groupData } = useGroupContext();

  if (!groupData.sections || groupData.sections.length === 0) {
    return <GroupEmptyState message={"This group doesn't have any sections"} />;
  }

  // Filter out inactive sections before sorting
  const activeSections = groupData.sections.filter((section) => section.active);
  const sortedSections = sortByPriority(activeSections);

  return (
    <View>
      {sortedSections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </View>
  );
};

export const GroupEmptyState = ({
  message,
}: GroupEmptyStateProps): JSX.Element => (
  <View style={commonStyles.emptyContainer}>
    <Text variant="body">{message}</Text>
  </View>
);
