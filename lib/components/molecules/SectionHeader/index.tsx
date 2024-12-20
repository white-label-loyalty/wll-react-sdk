import React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import Text from '../../atoms/Text';
import { useSectionHeaderStyles } from './styles';

type SectionHeaderProps = {
  title?: string;
  description?: string;
};

const SectionHeader = ({
  title,
  description,
}: SectionHeaderProps): JSX.Element | null => {
  const styles = useSectionHeaderStyles();
  const { theme } = useWllSdk();

  if (!title) {
    return null;
  }

  return (
    <View style={styles.sectionHeader}>
      {title && (
        <Text
          style={[
            styles.sectionTitle,
            {
              fontWeight: '700',
              color: theme.text,
            },
          ]}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text
          style={[
            styles.sectionDescription,
            {
              color: theme.alphaDerivedText[80],
            },
          ]}
        >
          {description}
        </Text>
      )}
    </View>
  );
};

export default SectionHeader;
