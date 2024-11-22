import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { TGroup } from '../../../types/group';
import { Skeleton } from '../../atoms';
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
      <View style={styles.emptyConatiner}>
        <Skeleton />
      </View>
    );
  }

  if (!groupData) {
    return (
      <View style={styles.emptyConatiner}>
        <Text>No group data available</Text>
      </View>
    );
  }

  if (!groupData.sections || groupData.sections.length === 0) {
    return (
      <View style={styles.emptyConatiner}>
        <Text>No sections available</Text>;
      </View>
    );
  }

  return (
    <View>
      {groupData.sections
        .sort((a, b) => {
          // Sort by priority (higher priority first)
          if (a.priority !== b.priority) {
            return b.priority - a.priority;
          }
          // If priorities are equal, maintain original order
          return groupData.sections.indexOf(a) - groupData.sections.indexOf(b);
        })
        .map((section) => (
          <Section key={section.id} section={section} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Group;
