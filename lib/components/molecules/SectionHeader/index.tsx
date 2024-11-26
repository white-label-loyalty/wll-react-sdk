import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../context/ResponsiveContext';
import { getResponsiveValue } from '../../../utils/responsiveHelper';
import Text from '../../atoms/Text';

type SectionHeaderProps = {
  title?: string;
  description?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();

  if (!title) {
    return null;
  }

  const dynamicStyles = StyleSheet.create({
    sectionHeader: {
      marginBottom: getResponsiveValue(16, 8, isDesktop, isTablet),
    },
    sectionTitle: {
      fontSize: getResponsiveValue(32, 18, isDesktop, isTablet),
      marginBottom: getResponsiveValue(8, 4, isDesktop, isTablet),
    },
    sectionDescription: {
      fontSize: getResponsiveValue(24, 14, isDesktop, isTablet),
    },
  });

  return (
    <View style={dynamicStyles.sectionHeader}>
      {title && (
        <Text
          style={[
            dynamicStyles.sectionTitle,
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
            dynamicStyles.sectionDescription,
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
