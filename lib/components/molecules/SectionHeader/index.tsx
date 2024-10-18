import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';

type SectionHeaderProps = {
  title?: string;
  description?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  const { theme } = useWllSdk();

  if (!title && !description) {
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
              color: theme.alphaDerivedText[20],
            },
          ]}
        >
          {description}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: createResponsiveStyle({
    marginBottom: [8, 8, 16],
  }),
  sectionTitle: createResponsiveStyle({
    fontSize: [18, 18, 32],
    marginBottom: [4, 4, 8],
  }),
  sectionDescription: createResponsiveStyle({
    fontSize: [14, 14, 24],
  }),
});

export default SectionHeader;
