import React, { createContext, useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { IS_MOBILE, IS_WEB } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useGroupRefresh } from '../../../hooks/useGroupRefresh';
import { useInitialGroupFetch } from '../../../hooks/useInitialGroupFetch';
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
 * This hook handles two distinct data fetching scenarios:
 * 1. Initial fetch: Shows loading state while first loading data
 * 2. Background refresh: Updates data silently without loading states
 *
 * The hook subscribes to GROUP_DATA_CHANGED events to refresh data
 * when notified by the host application, ensuring UI remains responsive
 * without showing loading indicators during refreshes.
 *
 * @param {string} id - The ID of the group to fetch
 * @returns {Object} Object containing group data, loading state, and any error
 */

const useGroupData = (id: string) => {
  const [groupData, setGroupData] = useState<TGroup | null>(null);

  const { isLoading, error } = useInitialGroupFetch({ id, setGroupData });
  useGroupRefresh({
    id,
    enabled: Boolean(groupData),
    setGroupData,
  });

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
      role="region"
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
  const { theme } = useWllSdk();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          padding: IS_MOBILE ? theme.sizes.lg : undefined,
        }}
        accessible
        accessibilityLabel="Loading group data"
      >
        <Skeleton numberOfSquares={IS_WEB ? 4 : 2} />
      </View>
    );
  }

  if (error || !groupData) {
    return <GroupEmptyState message={error || 'No group data available'} />;
  }

  return (
    <GroupContext.Provider value={{ groupData }}>
      <View testID="group-container">
        <GroupSections />
      </View>
    </GroupContext.Provider>
  );
};

export default Group;
