import React, { useCallback, useEffect, useState } from 'react';
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

  const { getGroupByID } = useWllSdk();
  const [groupData, setGroupData] = useState<TGroup | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchGroup = useCallback(async () => {
    try {
      setError(null);
      const response = await getGroupByID(id);
      setGroupData(response.data);
    } catch (err) {
      setError('Failed to fetch group data. Please try again later.');
    }
  }, [id, getGroupByID]);

  useEffect(() => {
    fetchGroup();
  }, [fetchGroup]);

  // Handle loading state
  if (!groupData && !error) {
    return (
      <View style={commonStyles.emptyContainer}>
        <Skeleton />
      </View>
    );
  }

  // Handle error state
  if (error) {
    return (
      <View style={commonStyles.emptyContainer}>
        <Text variant="body">{error}</Text>
      </View>
    );
  }

  // Handle empty group data
  if (!groupData) {
    return (
      <View style={commonStyles.emptyContainer}>
        <Text variant="body">No group data available</Text>
      </View>
    );
  }

  // Handle empty sections
  if (!groupData.sections || groupData.sections.length === 0) {
    return (
      <View style={commonStyles.emptyContainer}>
        <Text variant="body">No sections available</Text>
      </View>
    );
  }

  const sortedSections = sortByPriority(groupData.sections);

  return (
    <View>
      {sortedSections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </View>
  );
};

export default Group;
