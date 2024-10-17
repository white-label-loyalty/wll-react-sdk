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
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        setLoading(true);
        const { data, status } = await getGroupByID(id);
        if (status === 'success') {
          setGroupData(data);
        } else {
          throw new Error(`Unexpected response status: ${status}`);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [id, getGroupByID]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      {groupData && (
        <>
          {groupData.sections
            .sort((a, b) => a.priority - b.priority)
            .map((section) => (
              <Section key={section.id} section={section} />
            ))}
        </>
      )}
    </View>
  );
};

export default Group;
