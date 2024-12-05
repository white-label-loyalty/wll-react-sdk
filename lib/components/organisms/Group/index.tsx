import React, { useEffect, useState } from 'react';
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

const Group: React.FC<GroupProps> = ({ id }) => {
  const { getGroupByID } = useWllSdk();
  const [groupData, setGroupData] = useState<TGroup | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroup = async () => {
      setLoading(true);
      const response = await getGroupByID(id);
      setGroupData(response.data);
      setLoading(false);
    };

    fetchGroup();
  }, [id, getGroupByID]);

  if (loading) {
    return (
      <View style={commonStyles.emptyContainer}>
        <Skeleton />
      </View>
    );
  }

  if (!groupData) {
    return (
      <View style={commonStyles.emptyContainer}>
        <Text variant="body">No group data available</Text>
      </View>
    );
  }

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
