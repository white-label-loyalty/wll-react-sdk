import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { TGroup } from '../../../types/group';
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
      console.log(response.data);
      setGroupData(response.data);
      setLoading(false);
    };

    fetchGroup();
  }, [id, getGroupByID]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!groupData) {
    return <Text>No group data available</Text>;
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

export default Group;
